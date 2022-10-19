using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Smde.Sizes;
using Smde.Topology.TemplatesCell;
using Volo.Abp.EntityFrameworkCore.Modeling;
using static Smde.SmdeDbProperties;
using static Smde.Topology.TemplatesCell.TemplateCellConstants;

namespace Smde.EntityFrameworkCore.Configurations.Topology.TemplatesCell;

public class TemplateCellConfiguration : IEntityTypeConfiguration<TemplateCell>
{
    public void Configure(EntityTypeBuilder<TemplateCell> builder)
    {
        builder.ToTable(DbTablePrefix + "TemplatesCell", DbSchema);

        builder.ConfigureFullAuditedAggregateRoot();
        builder.ConfigureByConvention();

        builder.HasOne<Size>()
            .WithMany()
            .HasForeignKey(x => x.SizeId)
            .IsRequired(false)
            .OnDelete(DeleteBehavior.SetNull);
        
        builder.Property(x => x.Name)
            .HasMaxLength(MaxNameLenght)
            .IsRequired();
    }
}