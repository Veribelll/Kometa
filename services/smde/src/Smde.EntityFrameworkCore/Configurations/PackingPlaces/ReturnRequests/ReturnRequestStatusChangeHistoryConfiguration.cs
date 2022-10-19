using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Smde.PackingPlaces.ReturnRequests;
using Volo.Abp.EntityFrameworkCore.Modeling;
using static Smde.SmdeDbProperties;

namespace Smde.EntityFrameworkCore.Configurations.PackingPlaces.ReturnRequests;

public class ReturnRequestStatusChangeHistoryConfiguration: IEntityTypeConfiguration<ReturnRequestStatusChangeHistory>
{
    public void Configure(EntityTypeBuilder<ReturnRequestStatusChangeHistory> builder)
    {
        builder.ToTable(DbTablePrefix + "ReturnRequestStatusChangesHistory", DbSchema);

        builder.ConfigureByConvention();

        builder.HasKey(x => new { x.ReturnRequestId, x.Status, x.CreationTime });

        builder.HasIndex(x => new { x.ReturnRequestId });

        builder.Property(x => x.Status)
            .HasConversion(
                x => x.Value,
                x => ReturnRequestStatus.FromValue(x))
            .IsRequired();
    }
}