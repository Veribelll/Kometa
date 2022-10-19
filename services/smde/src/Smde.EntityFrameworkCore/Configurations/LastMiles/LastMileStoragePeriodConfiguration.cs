using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Smde.LastMiles;
using Smde.Orders;
using Volo.Abp.EntityFrameworkCore.Modeling;
using static Smde.SmdeDbProperties;

namespace Smde.EntityFrameworkCore.Configurations.LastMiles;

public class LastMileStoragePeriodConfiguration : IEntityTypeConfiguration<LastMileStoragePeriod>
{
    public void Configure(EntityTypeBuilder<LastMileStoragePeriod> builder)
    {
        builder.ToTable(DbTablePrefix + "LastMileStoragePeriods", DbSchema);

        builder.ConfigureByConvention();

        builder.HasKey(x => new { x.LastMileId, x.TypeOrder });

        builder.HasIndex(x => new { x.LastMileId, x.TypeOrder });

        builder.Property(x => x.TypeOrder)
            .HasConversion(
                x=>x.Value,
                x=>TypeOrder.FromValue(x))
            .IsRequired();

        builder.Property(x => x.Period)
            .IsRequired();
    }
}