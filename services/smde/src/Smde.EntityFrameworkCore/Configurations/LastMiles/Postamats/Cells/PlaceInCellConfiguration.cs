using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Smde.LastMiles.Postamats.Cells;
using Smde.Orders;
using Smde.PackingPlaces;
using Volo.Abp.EntityFrameworkCore.Modeling;
using static Smde.SmdeDbProperties;

namespace Smde.EntityFrameworkCore.Configurations.LastMiles.Postamats.Cells;

public class PlaceInCellConfiguration : IEntityTypeConfiguration<PlaceInCell>
{
    public void Configure(EntityTypeBuilder<PlaceInCell> builder)
    {
        builder.ToTable(DbTablePrefix + "PlacesInCell", DbSchema);

        builder.ConfigureByConvention();

        builder.HasKey(x => new { x.CellId, x.PackingPlaceId });

        builder.HasIndex(x => new { x.CellId, x.PackingPlaceId });

        builder.HasOne<PackingPlace>()
            .WithMany()
            .HasForeignKey(x => x.PackingPlaceId)
            .IsRequired()
            .OnDelete(DeleteBehavior.Cascade);
        
        builder.Property(x => x.CellId)
            .IsRequired();

        builder.Property(x => x.PackingPlaceId)
            .IsRequired();
    }
}