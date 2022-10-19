using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Smde.PackingPlaces.ShipmentRequests;
using Volo.Abp.EntityFrameworkCore.Modeling;
using static Smde.SmdeDbProperties;

namespace Smde.EntityFrameworkCore.Configurations.PackingPlaces.ShipmentRequests;

public class ShipmentRequestStatusChangeHistoryConfiguration : IEntityTypeConfiguration<ShipmentRequestStatusChangeHistory>
{
    public void Configure(EntityTypeBuilder<ShipmentRequestStatusChangeHistory> builder)
    {
        builder.ToTable(DbTablePrefix + "ShipmentRequestStatusChangesHistory", DbSchema);

        builder.ConfigureByConvention();

        builder.HasKey(x => new { x.ShipmentRequestId, x.Status, x.CreationTime });

        builder.HasIndex(x => new { x.ShipmentRequestId });

        builder.Property(x => x.Status)
            .HasConversion(
                x => x.Value,
                x => ShipmentRequestStatus.FromValue(x))
            .IsRequired();
    }
}