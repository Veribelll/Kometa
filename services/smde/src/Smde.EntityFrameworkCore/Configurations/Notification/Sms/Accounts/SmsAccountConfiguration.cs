using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Smde.Notification.Sms.Accounts;
using Volo.Abp.EntityFrameworkCore.Modeling;
using static Smde.Notification.Sms.Accounts.SmsAccountConstants;
using static Smde.SmdeDbProperties;

namespace Smde.EntityFrameworkCore.Configurations.Notification.Sms.Accounts;

public class SmsAccountConfiguration : IEntityTypeConfiguration<SmsAccount>
{
    public void Configure(EntityTypeBuilder<SmsAccount> builder)
    {
        builder.ToTable(DbTablePrefix + "SmsAccounts", DbSchema);

        builder.ConfigureFullAuditedAggregateRoot();
        builder.ConfigureByConvention();

        builder.Property(x => x.Name)
            .HasMaxLength(MaxNameLenght)
            .IsRequired();

        builder.Property(x => x.Sender)
            .HasMaxLength(MaxSenderLenght)
            .IsRequired();
    }
}