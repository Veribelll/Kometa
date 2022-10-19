using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Smde.Topology.TemplatesSection;
using Volo.Abp.EntityFrameworkCore.Modeling;
using static Smde.SmdeDbProperties;
using static Smde.Topology.TemplatesSection.TemplateSectionConstants;

namespace Smde.EntityFrameworkCore.Configurations.Topology.TemplatesSection;

public class TemplateSectionConfiguration : IEntityTypeConfiguration<TemplateSection>
{
    public void Configure(EntityTypeBuilder<TemplateSection> builder)
    {
        builder.ToTable(DbTablePrefix + "TemplatesSection", DbSchema);

        builder.ConfigureFullAuditedAggregateRoot();
        builder.ConfigureByConvention();

        builder.HasMany(x => x.Cells)
            .WithOne()
            .HasForeignKey(x => x.TemplateSectionId)
            .OnDelete(DeleteBehavior.Cascade)
            .IsRequired();

        builder.Navigation(x => x.Cells)
            .HasField("_cells")
            .UsePropertyAccessMode(PropertyAccessMode.Field)
            .AutoInclude();

        builder.Property(x => x.Name)
            .HasMaxLength(MaxNameLenght)
            .IsRequired();
    }
}