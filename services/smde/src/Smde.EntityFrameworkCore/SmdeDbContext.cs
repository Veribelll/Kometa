using System.Linq.Expressions;
using System.Reflection;
using Kometa.EntityFrameworkCore;
using Kometa.MultiContractor.Current;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Smde.Contractors;
using Smde.Emex.Accounts;
using Smde.Emex.Orders;
using Smde.Identity;
using Smde.LastMiles;
using Smde.LastMiles.Postamats;
using Smde.LastMiles.Postamats.Cells;
using Smde.LastMiles.Postamats.Controllers;
using Smde.Notification.Sms;
using Smde.Notification.Sms.Accounts;
using Smde.Orders;
using Smde.PackingPlaces;
using Smde.PackingPlaces.ReturnRequests;
using Smde.PackingPlaces.ShipmentRequests;
using Smde.Sizes;
using Smde.Topology.TemplatesCell;
using Smde.Topology.TemplatesPostamat;
using Smde.Topology.TemplatesSection;
using Volo.Abp.Auditing;
using Volo.Abp.AuditLogging.EntityFrameworkCore;
using Volo.Abp.BackgroundJobs.EntityFrameworkCore;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.FeatureManagement.EntityFrameworkCore;
using Volo.Abp.Identity;
using Volo.Abp.Identity.EntityFrameworkCore;
using Volo.Abp.IdentityServer.EntityFrameworkCore;
using Volo.Abp.MultiTenancy;
using Volo.Abp.PermissionManagement.EntityFrameworkCore;
using Volo.Abp.SettingManagement.EntityFrameworkCore;
using Volo.Abp.TenantManagement;
using Volo.Abp.TenantManagement.EntityFrameworkCore;
using static Smde.SmdeDbProperties;

#pragma warning disable 8618

namespace Smde.EntityFrameworkCore;

[ReplaceDbContext(typeof(ITenantManagementDbContext))]
[ReplaceDbContext(typeof(IIdentityDbContext))]
[ConnectionStringName(ConnectionStringName)]
public class SmdeDbContext : KometaDbContext<SmdeDbContext>,
    ITenantManagementDbContext,
    IIdentityDbContext
{
    public DbSet<Tenant> Tenants { get; set; }
    public DbSet<TenantConnectionString> TenantConnectionStrings { get; set; }
    public DbSet<IdentityUser> Users { get; set; }
    public DbSet<IdentityRole> Roles { get; set; }
    public DbSet<IdentityClaimType> ClaimTypes { get; set; }
    public DbSet<OrganizationUnit> OrganizationUnits { get; set; }
    public DbSet<IdentitySecurityLog> SecurityLogs { get; set; }
    public DbSet<IdentityLinkUser> LinkUsers { get; set; }

    public DbSet<Contractor> Contractors { get; set; }
    public DbSet<Company> Companies { get; set; }
    public DbSet<IndividualEntrepreneur> IndividualEntrepreneurs { get; set; }
    public DbSet<Size> Sizes { get; set; }
    public DbSet<LastMile> LastMiles { get; set; }
    public DbSet<LastMileStoragePeriod> LastMileStoragePeriods { get; set; }
    public DbSet<Postamat> Postamats { get; set; }
    public DbSet<ControllerBase> BaseControllers { get; set; }
    public DbSet<PromixController> PromixControllers { get; set; }
    public DbSet<Lock> Locks { get; set; }
    public DbSet<Cell> Cells { get; set; }
    public DbSet<CellDisplay> CellDisplays { get; set; }
    public DbSet<PlaceInCell> PlaceInCell { get; set; }
    public DbSet<Customer> Customers { get; set; }
    public DbSet<EmexCustomer> EmexCustomers { get; set; }
    public DbSet<EmexOrder> EmexOrders { get; set; }
    public DbSet<EmexProduct> EmexProducts { get; set; }
    public DbSet<EmexAccount> EmexAccounts { get; set; }
    public DbSet<SmsMessage> SmsMessages { get; set; }
    public DbSet<SmsTemplate> SmsTemplates { get; set; }
    public DbSet<SmsAccount> SmsAccounts { get; set; }
    public DbSet<SmsCenterAccount> SmsCenterAccounts { get; set; }
    public DbSet<PackingPlace> PackingPlaces { get; set; }
    public DbSet<PackingPlaceStatusChangeHistory> PackingPlaceStatusChangeHistories { get; set; }
    public DbSet<ShipmentRequest> ShipmentRequests { get; set; }
    public DbSet<ShipmentRequestStatusChangeHistory> ShipmentRequestStatusChangeHistories { get; set; }
    public DbSet<ReturnRequest> ReturnRequests { get; set; }
    public DbSet<ReturnRequestStatusChangeHistory> ReturnRequestStatusChangeHistories { get; set; }
    public DbSet<TemplateCell> TemplatesCell { get; set; }
    public DbSet<TemplateSection> TemplatesSection { get; set; }
    public DbSet<TemplatePostamat> TemplatesPostamat { get; set; }

    public SmdeDbContext(DbContextOptions<SmdeDbContext> options) : base(options)
    {
    }

    protected override bool ShouldFilterEntity<TEntity>(IMutableEntityType entityType)
    {
        if (typeof(Contractor).IsAssignableFrom(typeof(TEntity)))
        {
            return true;
        }

        if (typeof(IdentityUser).IsAssignableFrom(typeof(TEntity)))
        {
            return true;
        }

        return base.ShouldFilterEntity<TEntity>(entityType);
    }

    protected override Expression<Func<TEntity, bool>>? CreateFilterExpression<TEntity>()
    {
        var expression = base.CreateFilterExpression<TEntity>();

        if (typeof(Contractor).IsAssignableFrom(typeof(TEntity)))
        {
            Expression<Func<TEntity, bool>> isActiveFilter = e =>
                !MultiContractorFilterEnabled ||
                !CurrentUser.IsAuthenticated ||
                AvailableContractors.Ids.Contains(EF.Property<Guid>(e, nameof(Contractor.Id)));

            expression = expression == null
                ? isActiveFilter
                : CombineExpressions(expression, isActiveFilter);
        }

        if (typeof(IdentityUser).IsAssignableFrom(typeof(TEntity)))
        {
            Expression<Func<TEntity, bool>> isActiveFilter = e =>
                !MultiContractorFilterEnabled ||
                !CurrentUser.IsAuthenticated ||
                EF.Property<List<Guid?>>(e, IdentityUserConstants.NamePropertyContractorIds)
                    .Contains(CurrentContractor.Id);

            expression = expression == null
                ? isActiveFilter
                : CombineExpressions(expression, isActiveFilter);
        }

        return expression;
    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        foreach (var entity in builder.Model.GetEntityTypes())
        {
            var type = entity.ClrType;

            if (typeof(IMultiContractor).IsAssignableFrom(type))
            {
                builder.Entity(type)
                    .HasOne(typeof(Contractor))
                    .WithMany()
                    .HasForeignKey(nameof(IMultiContractor.ContractorId))
                    .IsRequired()
                    .OnDelete(DeleteBehavior.Cascade);
            }

            if (typeof(ICreationAuditedObject).IsAssignableFrom(type))
            {
                builder.Entity(type)
                    .HasOne(typeof(IdentityUser))
                    .WithMany()
                    .HasForeignKey(nameof(ICreationAuditedObject.CreatorId))
                    .IsRequired(false)
                    .OnDelete(DeleteBehavior.SetNull);
            }

            if (typeof(IModificationAuditedObject).IsAssignableFrom(type))
            {
                builder.Entity(type)
                    .HasOne(typeof(IdentityUser))
                    .WithMany()
                    .HasForeignKey(nameof(IModificationAuditedObject.LastModifierId))
                    .IsRequired(false)
                    .OnDelete(DeleteBehavior.SetNull);
            }

            if (typeof(IDeletionAuditedObject).IsAssignableFrom(type))
            {
                builder.Entity(type)
                    .HasOne(typeof(IdentityUser))
                    .WithMany()
                    .HasForeignKey(nameof(IDeletionAuditedObject.DeleterId))
                    .IsRequired(false)
                    .OnDelete(DeleteBehavior.SetNull);
            }

            if (typeof(IMultiTenant).IsAssignableFrom(type))
            {
                builder.Entity(type)
                    .HasOne(typeof(Tenant))
                    .WithMany()
                    .HasForeignKey(nameof(IMultiTenant.TenantId))
                    .IsRequired(false)
                    .OnDelete(DeleteBehavior.Cascade);
            }
        }

        builder.ConfigurePermissionManagement();
        builder.ConfigureSettingManagement();
        builder.ConfigureBackgroundJobs();
        builder.ConfigureAuditLogging();
        builder.ConfigureIdentity();
        builder.ConfigureIdentityServer();
        builder.ConfigureFeatureManagement();
        builder.ConfigureTenantManagement();

        builder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
    }
}
