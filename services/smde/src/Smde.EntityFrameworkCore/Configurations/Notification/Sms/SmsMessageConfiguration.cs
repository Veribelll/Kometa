using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Smde.Notification.Sms;
using Smde.Notification.Sms.Accounts;
using Volo.Abp.EntityFrameworkCore.Modeling;
using static Smde.Notification.Sms.SmsMessageConstants;
using static Smde.SmdeDbProperties;

namespace Smde.EntityFrameworkCore.Configurations.Notification.Sms;

public class SmsMessageConfiguration : IEntityTypeConfiguration<SmsMessage>
{
    public void Configure(EntityTypeBuilder<SmsMessage> builder)
    {
        builder.ToTable(DbTablePrefix + "SmsMessages", DbSchema);

        builder.ConfigureFullAuditedAggregateRoot();
        builder.ConfigureByConvention();

        builder.HasOne<SmsAccount>()
            .WithMany()
            .HasForeignKey(x => x.AccountId)
            .IsRequired();

        builder.Property(x => x.PhoneNumber)
            .HasMaxLength(MaxPhoneNumberLenght);

        builder.Property(x => x.Text)
            .HasMaxLength(MaxTextLenght);
    }
}