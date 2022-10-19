using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Smde.Notification.Sms;
using Volo.Abp.EntityFrameworkCore.Modeling;
using static Smde.Notification.Sms.SmsTemplateConstants;
using static Smde.SmdeDbProperties;

namespace Smde.EntityFrameworkCore.Configurations.Notification.Sms;

public class SmsTemplateConfiguration : IEntityTypeConfiguration<SmsTemplate>
{
    public void Configure(EntityTypeBuilder<SmsTemplate> builder)
    {
        builder.ToTable(DbTablePrefix + "SmsTemplates", DbSchema);

        builder.ConfigureFullAuditedAggregateRoot();
        builder.ConfigureByConvention();

        builder.Property(x => x.Name)
            .HasMaxLength(MaxNameLenght)
            .IsRequired();

        builder.Property(x => x.EventType)
            .IsRequired();

        builder.Property(x => x.Template)
            .HasMaxLength(MaxTemplateLenght)
            .IsRequired();

        builder.Property(x => x.Comment)
            .HasMaxLength(MaxCommentLenght)
            .IsRequired(false);
    }
}