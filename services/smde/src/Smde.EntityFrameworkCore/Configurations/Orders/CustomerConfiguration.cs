using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Smde.Orders;
using Volo.Abp.EntityFrameworkCore.Modeling;
using static Smde.Orders.CustomerConstants;
using static Smde.SmdeDbProperties;

namespace Smde.EntityFrameworkCore.Configurations.Orders;

public class CustomerConfiguration : IEntityTypeConfiguration<Customer>
{
    public void Configure(EntityTypeBuilder<Customer> builder)
    {
        builder.ToTable(DbTablePrefix + "Customers", DbSchema);

        builder.ConfigureFullAuditedAggregateRoot();
        builder.ConfigureByConvention();

        builder.Property(x => x.Name)
            .HasMaxLength(MaxNameLenght)
            .IsRequired();

        builder.Property(x => x.Phone)
            .HasMaxLength(MaxPhoneLenght)
            .IsRequired();

        builder.Property(x => x.ExternalId)
            .HasMaxLength(MaxExternalIdLenght)
            .IsRequired();

        builder.Property(x => x.Email)
            .HasMaxLength(MaxEmailLenght);
    }
}