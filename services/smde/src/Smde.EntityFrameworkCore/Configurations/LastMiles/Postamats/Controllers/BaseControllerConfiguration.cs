using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Smde.LastMiles.Postamats.Controllers;
using Volo.Abp.EntityFrameworkCore.Modeling;
using static Smde.LastMiles.Postamats.Controllers.BaseControllerConstants;
using static Smde.LastMiles.Postamats.SerialPortSettingsConstants;
using static Smde.SmdeDbProperties;

namespace Smde.EntityFrameworkCore.Configurations.LastMiles.Postamats.Controllers;

public class BaseControllerConfiguration : IEntityTypeConfiguration<ControllerBase>
{
    public void Configure(EntityTypeBuilder<ControllerBase> builder)
    {
        builder.ToTable(DbTablePrefix + "Controllers", DbSchema);

        builder.ConfigureFullAuditedAggregateRoot();
        builder.ConfigureByConvention();

        builder.HasMany(x => x.Locks)
            .WithOne()
            .HasForeignKey(x => x.ControllerId)
            .OnDelete(DeleteBehavior.Cascade)
            .IsRequired();

        builder.Navigation(x => x.Locks)
            .HasField("_locks")
            .UsePropertyAccessMode(PropertyAccessMode.Field)
            .AutoInclude();

        builder.Property(x => x.Name)
            .HasMaxLength(MaxNameLenght)
            .IsRequired();

        builder.OwnsOne(x => x.Settings, settings =>
        {
            settings.Property(x => x.BaudRate)
                .IsRequired();

            settings.Property(x => x.DataBits)
                .IsRequired();

            settings.Property(x => x.StopBits)
                .IsRequired();

            settings.Property(x => x.PortName)
                .HasMaxLength(MaxPortNameLenght)
                .IsRequired();
        });
    }
}