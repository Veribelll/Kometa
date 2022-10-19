using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Smde.LastMiles.Postamats.Cells;
using Smde.LastMiles.Postamats.Controllers;
using Smde.Sizes;
using Volo.Abp.EntityFrameworkCore.Modeling;
using static Smde.LastMiles.Postamats.Cells.CellConstants;
using static Smde.SmdeDbProperties;

namespace Smde.EntityFrameworkCore.Configurations.LastMiles.Postamats.Cells;

public class CellConfiguration : IEntityTypeConfiguration<Cell>
{
    public void Configure(EntityTypeBuilder<Cell> builder)
    {
        builder.ToTable(DbTablePrefix + "Cells", DbSchema);

        builder.ConfigureFullAuditedAggregateRoot();
        builder.ConfigureByConvention();

        builder.HasOne<Size>()
            .WithMany()
            .HasForeignKey(x => x.SizeId)
            .IsRequired(false);
        
        builder.HasOne<Lock>()
            .WithOne()
            .HasForeignKey<Cell>(x => x.LockId)
            .OnDelete(DeleteBehavior.SetNull)
            .IsRequired(false);

        builder.HasMany(x => x.Places)
            .WithOne()
            .HasForeignKey(x => x.CellId)
            .IsRequired();

        builder.Navigation(x => x.Places)
            .HasField("_places")
            .UsePropertyAccessMode(PropertyAccessMode.Field)
            .AutoInclude();

        builder.Property(x => x.Name)
            .HasMaxLength(MaxNameLenght)
            .IsRequired();

        builder.Property(x => x.Barcode)
            .HasMaxLength(MaxBarcodeLenght)
            .IsRequired();

        builder.Property(x => x.PinCode)
            .HasMaxLength(MaxPinCodeLenght)
            .IsRequired(false);

        builder.Property(x => x.ServicePinCode)
            .HasMaxLength(MaxServicePinCodeLenght)
            .IsRequired(false);
    }
}