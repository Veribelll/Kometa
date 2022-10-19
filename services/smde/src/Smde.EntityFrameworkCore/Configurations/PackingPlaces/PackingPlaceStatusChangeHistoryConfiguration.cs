using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Smde.PackingPlaces;
using Volo.Abp.EntityFrameworkCore.Modeling;
using static Smde.SmdeDbProperties;

namespace Smde.EntityFrameworkCore.Configurations.PackingPlaces;

public class PackingPlaceStatusChangeHistoryConfiguration : IEntityTypeConfiguration<PackingPlaceStatusChangeHistory>
{
    public void Configure(EntityTypeBuilder<PackingPlaceStatusChangeHistory> builder)
    {
        builder.ToTable(DbTablePrefix + "PackingPlaceStatusChangesHistory", DbSchema);

        builder.ConfigureByConvention();

        builder.HasKey(x => new { x.PackingPlaceId, x.Status, x.CreationTime });

        builder.HasIndex(x => new { x.PackingPlaceId });

        builder.Property(x => x.Status)
            .HasConversion(
                x=>x.Value,
                x=>PackingPlaceStatus.FromValue(x))
            .IsRequired();
    }
}