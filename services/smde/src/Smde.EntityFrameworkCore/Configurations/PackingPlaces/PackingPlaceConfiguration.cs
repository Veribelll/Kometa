using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Smde.Orders;
using Smde.PackingPlaces;
using Volo.Abp.EntityFrameworkCore.Modeling;
using static Smde.PackingPlaces.PackingPlaceConstants;
using static Smde.SmdeDbProperties;

namespace Smde.EntityFrameworkCore.Configurations.PackingPlaces;

public class PackingPlaceConfiguration : IEntityTypeConfiguration<PackingPlace>
{
    public void Configure(EntityTypeBuilder<PackingPlace> builder)
    {
        builder.ToTable(DbTablePrefix + "PackingPlaces", DbSchema);

        builder.ConfigureFullAuditedAggregateRoot();
        builder.ConfigureByConvention();

        builder.HasIndex(x => x.Barcode);

        builder.HasMany(x => x.ChangesHistory)
            .WithOne()
            .HasForeignKey(x => x.PackingPlaceId)
            .IsRequired();

        builder.HasOne<Customer>()
            .WithMany()
            .HasForeignKey(x => x.CustomerId)
            .IsRequired(false);

        builder.Navigation(x => x.ChangesHistory)
            .HasField("_changesHistory")
            .UsePropertyAccessMode(PropertyAccessMode.Field)
            .AutoInclude();

        builder.Property(x => x.TypeOrder)
            .HasConversion(
                x => x.Value,
                x => TypeOrder.FromValue(x))
            .IsRequired();

        builder.Property(x => x.Status)
            .HasConversion(
                x => x.Value,
                x => PackingPlaceStatus.FromValue(x))
            .IsRequired();
        
        builder.Property(x => x.Barcode)
            .HasMaxLength(MaxBarcodeLenght)
            .IsRequired();
    }
}