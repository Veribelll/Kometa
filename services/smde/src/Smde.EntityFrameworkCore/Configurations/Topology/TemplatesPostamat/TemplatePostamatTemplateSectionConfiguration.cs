using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Smde.Topology.TemplatesPostamat;
using Smde.Topology.TemplatesSection;
using Volo.Abp.EntityFrameworkCore.Modeling;
using static Smde.SmdeDbProperties;

namespace Smde.EntityFrameworkCore.Configurations.Topology.TemplatesPostamat;

public class TemplatePostamatTemplateSectionConfiguration : IEntityTypeConfiguration<TemplatePostamatTemplateSection>
{
    public void Configure(EntityTypeBuilder<TemplatePostamatTemplateSection> builder)
    {
        builder.ToTable(DbTablePrefix + "TemplatePostamatTemplatesSection", DbSchema);

        builder.ConfigureByConvention();

        builder.HasKey(x => new { x.TemplatePostamatId, x.Position });

        builder.HasIndex(x => new { x.TemplatePostamatId, x.Position });

        builder.HasOne<TemplateSection>()
            .WithMany()
            .HasForeignKey(x => x.TemplateSectionId)
            .IsRequired()
            .OnDelete(DeleteBehavior.Cascade);

        builder.HasOne<TemplatePostamat>()
            .WithMany(x => x.Sections)
            .HasForeignKey(x => x.TemplatePostamatId)
            .IsRequired()
            .OnDelete(DeleteBehavior.Cascade);

        builder.Property(x => x.Position)
            .IsRequired();
    }
}