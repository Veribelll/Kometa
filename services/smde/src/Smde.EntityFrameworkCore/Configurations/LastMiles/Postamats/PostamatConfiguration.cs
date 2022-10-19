using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Smde.LastMiles.Postamats;
using Smde.LastMiles.Postamats.Cells;
using Smde.LastMiles.Postamats.Controllers;
using Volo.Abp.Identity;
using static Smde.LastMiles.Postamats.PostamatSettingsConstants;
using static Smde.LastMiles.Postamats.SerialPortSettingsConstants;

namespace Smde.EntityFrameworkCore.Configurations.LastMiles.Postamats;

public class PostamatConfiguration : IEntityTypeConfiguration<Postamat>
{
    public void Configure(EntityTypeBuilder<Postamat> builder)
    {
        builder.HasOne<IdentityUser>()
            .WithMany()
            .HasForeignKey(x => x.DefaultCourierId)
            .IsRequired();

        builder.HasMany<Cell>("_cells")
            .WithOne()
            .HasForeignKey(x => x.PostamatId)
            .OnDelete(DeleteBehavior.Cascade)
            .IsRequired();

        builder.HasMany<ControllerBase>("_controllers")
            .WithOne()
            .HasForeignKey(x => x.PostamatId)
            .OnDelete(DeleteBehavior.Cascade)
            .IsRequired();

        builder.HasMany<CellDisplay>("_displays")
            .WithOne()
            .HasForeignKey(x => x.PostamatId)
            .OnDelete(DeleteBehavior.Cascade)
            .IsRequired();

        builder.Navigation("_cells")
            .HasField("_cells")
            .UsePropertyAccessMode(PropertyAccessMode.Field)
            .AutoInclude();

        builder.Navigation("_controllers")
            .HasField("_controllers")
            .UsePropertyAccessMode(PropertyAccessMode.Field)
            .AutoInclude();

        builder.Navigation("_displays")
            .HasField("_displays")
            .UsePropertyAccessMode(PropertyAccessMode.Field)
            .AutoInclude();

        builder
            .Ignore(x => x.Cells)
            .Ignore(x => x.Controllers)
            .Ignore(x => x.Displays);

        builder.OwnsOne(x => x.Settings, settings =>
        {
            settings.Property(x => x.IsAutoUpdate)
                .IsRequired();

            settings.Property(x => x.ReceptionWaitingListOnly)
                .IsRequired();

            settings.Property(x => x.AdminPhone)
                .HasMaxLength(MaxAdminPhoneLenght)
                .IsRequired(false);
        });


        builder.OwnsOne(x => x.Scanner, scanner =>
        {
            scanner.Property(x => x.BaudRate)
                .IsRequired();

            scanner.Property(x => x.DataBits)
                .IsRequired();

            scanner.Property(x => x.StopBits)
                .IsRequired();

            scanner.Property(x => x.PortName)
                .HasMaxLength(MaxPortNameLenght)
                .IsRequired();
        });

        builder.OwnsOne(x => x.FilePrinter, printer =>
        {
            printer.Property(x => x.FilePath)
                .IsRequired();
        });

        builder.OwnsOne(x => x.NetworkPrinter, printer =>
        {
            printer.Property(x => x.IpAddress)
                .IsRequired();

            printer.Property(x => x.Port)
                .IsRequired();

            printer.Property(x => x.ReconnectOnTimeout)
                .IsRequired();
        });

        builder.OwnsOne(x => x.SerialPrinter, printer =>
        {
            printer.OwnsOne(x => x.Settings, settings =>
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
        });
    }
}