using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Smde.LastMiles;
using Smde.Notification.Sms;
using Smde.Orders;
using Volo.Abp.EntityFrameworkCore.Modeling;
using static Smde.SmdeDbProperties;

namespace Smde.EntityFrameworkCore.Configurations.LastMiles;

public class LastMileSmsTemplateConfiguration: IEntityTypeConfiguration<LastMileSmsTemplate>
{
    public void Configure(EntityTypeBuilder<LastMileSmsTemplate> builder)
    {
        builder.ToTable(DbTablePrefix + "LastMileSmsTemplates", DbSchema);

        builder.ConfigureByConvention();

        builder.HasKey(x => new { x.LastMileId, x.TypeOrder, x.EventType });

        builder.HasIndex(x => new { x.LastMileId, x.TypeOrder, x.EventType });

        builder.HasOne<SmsTemplate>()
            .WithMany()
            .HasForeignKey(x => x.SmsTemplateId)
            .IsRequired();

        builder.Property(x => x.TypeOrder)
            .HasConversion(
                x => x.Value,
                x => TypeOrder.FromValue(x))
            .IsRequired();

        builder.Property(x => x.EventType)
            .IsRequired();
    }
}