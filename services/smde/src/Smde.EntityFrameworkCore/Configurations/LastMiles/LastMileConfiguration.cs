using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Smde.Emex.Accounts;
using Smde.LastMiles;
using Smde.LastMiles.AccessKeys;
using Smde.Notification.Sms.Accounts;
using Volo.Abp.EntityFrameworkCore.Modeling;
using static Smde.LastMiles.LastMileConstants;
using static Smde.SmdeDbProperties;

namespace Smde.EntityFrameworkCore.Configurations.LastMiles;

public class LastMileConfiguration : IEntityTypeConfiguration<LastMile>
{
    public void Configure(EntityTypeBuilder<LastMile> builder)
    {
        builder.ToTable(DbTablePrefix + "LastMiles", DbSchema);

        builder.ConfigureFullAuditedAggregateRoot();
        builder.ConfigureByConvention();

        builder
            .Ignore(x => x.AccessKeys)
            .Ignore(x => x.StoragePeriods)
            .Ignore(x => x.ReturnPeriods)
            .Ignore(x => x.SmsTemplates);

        builder.OwnsOne(x => x.AccountIds, accountIds =>
        {
            accountIds.HasOne<EmexAccount>()
                .WithMany()
                .HasForeignKey(x => x.EmexAccountId)
                .IsRequired(false);

            accountIds.HasOne<SmsAccount>()
                .WithMany()
                .HasForeignKey(x => x.SmsAccountId)
                .IsRequired(false);
        });

        builder.HasMany<AccessKey>("_accessKeys")
            .WithOne()
            .HasForeignKey(x => x.LastMileId)
            .IsRequired()
            .OnDelete(DeleteBehavior.Cascade);

        builder.HasMany<LastMileStoragePeriod>("_storagePeriods")
            .WithOne()
            .HasForeignKey(x => x.LastMileId)
            .IsRequired()
            .OnDelete(DeleteBehavior.Cascade);

        builder.HasMany<LastMileReturnPeriod>("_returnPeriods")
            .WithOne()
            .HasForeignKey(x => x.LastMileId)
            .IsRequired()
            .OnDelete(DeleteBehavior.Cascade);

        builder.HasMany<LastMileSmsTemplate>("_smsTemplates")
            .WithOne()
            .HasForeignKey(x => x.LastMileId)
            .IsRequired()
            .OnDelete(DeleteBehavior.Cascade);

        builder.Property(x => x.Name)
            .HasMaxLength(MaxNameLenght)
            .IsRequired();

        builder.Property(x => x.Address)
            .HasMaxLength(MaxAddressLenght)
            .IsRequired();

        builder.Navigation("_accessKeys")
            .HasField("_accessKeys")
            .UsePropertyAccessMode(PropertyAccessMode.Field)
            .AutoInclude();

        builder.Navigation("_storagePeriods")
            .HasField("_storagePeriods")
            .UsePropertyAccessMode(PropertyAccessMode.Field)
            .AutoInclude();

        builder.Navigation("_returnPeriods")
            .HasField("_returnPeriods")
            .UsePropertyAccessMode(PropertyAccessMode.Field)
            .AutoInclude();

        builder.Navigation("_smsTemplates")
            .HasField("_smsTemplates")
            .UsePropertyAccessMode(PropertyAccessMode.Field)
            .AutoInclude();
    }
}