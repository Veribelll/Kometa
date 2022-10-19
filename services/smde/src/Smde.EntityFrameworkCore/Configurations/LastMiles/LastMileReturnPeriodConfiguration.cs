using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Smde.LastMiles;
using Smde.Orders;
using Volo.Abp.EntityFrameworkCore.Modeling;
using static Smde.SmdeDbProperties;

namespace Smde.EntityFrameworkCore.Configurations.LastMiles;

public class LastMileReturnPeriodConfiguration : IEntityTypeConfiguration<LastMileReturnPeriod>
{
    public void Configure(EntityTypeBuilder<LastMileReturnPeriod> builder)
    {
        builder.ToTable(DbTablePrefix + "LastMileReturnPeriods", DbSchema);

        builder.ConfigureByConvention();

        builder.HasKey(x => new { x.LastMileId, x.TypeOrder });

        builder.HasIndex(x => new { x.LastMileId, x.TypeOrder });

        builder.Property(x => x.TypeOrder)
            .HasConversion(
                x => x.Value,
                x => TypeOrder.FromValue(x))
            .IsRequired();

        builder.Property(x => x.Period)
            .IsRequired();
    }
}