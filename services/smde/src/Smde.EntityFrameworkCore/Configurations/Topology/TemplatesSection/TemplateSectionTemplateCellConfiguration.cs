using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Smde.Topology.TemplatesCell;
using Smde.Topology.TemplatesSection;
using Volo.Abp.EntityFrameworkCore.Modeling;
using static Smde.SmdeDbProperties;

namespace Smde.EntityFrameworkCore.Configurations.Topology.TemplatesSection;

public class TemplateSectionTemplateCellConfiguration : IEntityTypeConfiguration<TemplateSectionTemplateCell>
{
    public void Configure(EntityTypeBuilder<TemplateSectionTemplateCell> builder)
    {
        builder.ToTable(DbTablePrefix + "TemplateSectionTemplatesCell", DbSchema);

        builder.ConfigureByConvention();

        builder.HasKey(x => new { x.TemplateSectionId, x.Position });

        builder.HasIndex(x => new { x.TemplateSectionId, x.Position });

        builder.HasOne<TemplateCell>()
            .WithMany()
            .HasForeignKey(x => x.TemplateCellId)
            .IsRequired()
            .OnDelete(DeleteBehavior.Cascade);

        builder.HasOne<TemplateSection>()
            .WithMany(x => x.Cells)
            .HasForeignKey(x => x.TemplateSectionId)
            .IsRequired()
            .OnDelete(DeleteBehavior.Cascade);

        builder.Property(x => x.Position)
            .IsRequired();
    }
}