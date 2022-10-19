using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Smde.LastMiles.Postamats.Cells;
using Volo.Abp.EntityFrameworkCore.Modeling;
using static Smde.SmdeDbProperties;

namespace Smde.EntityFrameworkCore.Configurations.LastMiles.Postamats.Cells;

public class CellDisplayConfiguration : IEntityTypeConfiguration<CellDisplay>
{
    public void Configure(EntityTypeBuilder<CellDisplay> builder)
    {
        builder.ToTable(DbTablePrefix + "CellDisplays", DbSchema);

        builder.ConfigureFullAuditedAggregateRoot();
        builder.ConfigureByConvention();

        builder.HasKey(x => new { x.PostamatId, x.X, x.Y });

        builder.HasIndex(x => new { x.PostamatId, x.X, x.Y });

        builder.HasOne<Cell>()
            .WithMany()
            .HasForeignKey(x => x.CellId)
            .IsRequired(false)
            .OnDelete(DeleteBehavior.SetNull);
    }
}