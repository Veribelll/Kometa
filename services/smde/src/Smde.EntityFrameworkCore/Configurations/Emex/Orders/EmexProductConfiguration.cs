using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Smde.Emex.Orders;
using Smde.PackingPlaces;
using Volo.Abp.EntityFrameworkCore.Modeling;
using static Smde.Emex.Orders.EmexProductConstants;
using static Smde.SmdeDbProperties;

namespace Smde.EntityFrameworkCore.Configurations.Emex.Orders;

public class EmexProductConfiguration : IEntityTypeConfiguration<EmexProduct>
{
    public void Configure(EntityTypeBuilder<EmexProduct> builder)
    {
        builder.ToTable(DbTablePrefix + "EmexProducts", DbSchema);

        builder.ConfigureFullAuditedAggregateRoot();
        builder.ConfigureByConvention();

        builder.HasOne<PackingPlace>()
            .WithMany()
            .HasForeignKey(x => x.PackingPlaceId)
            .IsRequired(false)
            .OnDelete(DeleteBehavior.SetNull);

        builder.Property(x => x.Barcode)
            .IsRequired()
            .HasMaxLength(MaxBarcodeLenght);

        builder.Property(x => x.Name)
            .HasMaxLength(MaxNameLenght)
            .IsRequired();

        builder.Property(x => x.VendorCode)
            .HasMaxLength(MaxVendorCodeLenght)
            .IsRequired();

        builder.Property(x => x.Manufacturer)
            .HasMaxLength(MaxManufacturerLenght)
            .IsRequired();

        builder.Property(x => x.ManufacturerCountry)
            .HasMaxLength(MaxManufacturerCountryLenght)
            .IsRequired(false);

        builder.Property(x => x.ManufacturerCountryCode)
            .HasMaxLength(MaxManufacturerCountryCodeLenght)
            .IsRequired(false);

        builder.Property(x => x.Marking)
            .HasMaxLength(MaxMarkingLenght)
            .IsRequired(false);

        builder.Property(x => x.Gtd)
            .HasMaxLength(MaxGtdLenght)
            .IsRequired(false);
    }
}