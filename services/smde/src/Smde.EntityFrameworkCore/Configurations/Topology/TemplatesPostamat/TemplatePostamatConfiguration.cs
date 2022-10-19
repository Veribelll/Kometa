using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Smde.Topology.TemplatesPostamat;
using Volo.Abp.EntityFrameworkCore.Modeling;
using static Smde.SmdeDbProperties;
using static Smde.Topology.TemplatesPostamat.TemplatePostamatConstants;

namespace Smde.EntityFrameworkCore.Configurations.Topology.TemplatesPostamat;

public class TemplatePostamatConfiguration : IEntityTypeConfiguration<TemplatePostamat>
{
    public void Configure(EntityTypeBuilder<TemplatePostamat> builder)
    {
        builder.ToTable(DbTablePrefix + "TemplatesPostamat", DbSchema);

        builder.ConfigureFullAuditedAggregateRoot();
        builder.ConfigureByConvention();

        builder.HasMany(x => x.Sections)
            .WithOne()
            .HasForeignKey(x => x.TemplatePostamatId)
            .OnDelete(DeleteBehavior.Cascade)
            .IsRequired();

        builder.Navigation(x => x.Sections)
            .HasField("_sections")
            .UsePropertyAccessMode(PropertyAccessMode.Field)
            .AutoInclude();

        builder.Property(x => x.Name)
            .HasMaxLength(MaxNameLenght)
            .IsRequired();
    }
}