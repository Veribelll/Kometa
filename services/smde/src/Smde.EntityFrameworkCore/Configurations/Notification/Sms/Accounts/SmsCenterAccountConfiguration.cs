using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Smde.Notification.Sms.Accounts;
using static Smde.Notification.Sms.Accounts.SmsCenterAccountConstants;

namespace Smde.EntityFrameworkCore.Configurations.Notification.Sms.Accounts;

public class SmsCenterAccountConfiguration: IEntityTypeConfiguration<SmsCenterAccount>
{
    public void Configure(EntityTypeBuilder<SmsCenterAccount> builder)
    {
        builder.Property(x => x.Login)
            .HasMaxLength(MaxLoginLenght)
            .IsRequired();

        builder.Property(x => x.Password)
            .HasMaxLength(MaxPasswordLenght)
            .IsRequired();
    }
}