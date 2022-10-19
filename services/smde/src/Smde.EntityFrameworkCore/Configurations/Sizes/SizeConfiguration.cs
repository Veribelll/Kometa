using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Smde.Sizes;
using Volo.Abp.EntityFrameworkCore.Modeling;
using static Smde.Sizes.SizeConstants;
using static Smde.SmdeDbProperties;

namespace Smde.EntityFrameworkCore.Configurations.Sizes;

public class SizeConfiguration : IEntityTypeConfiguration<Size>
{
    public void Configure(EntityTypeBuilder<Size> builder)
    {
        builder.ToTable(DbTablePrefix + "Sizes", DbSchema);

        builder.ConfigureFullAuditedAggregateRoot();
        builder.ConfigureByConvention();

        builder.HasIndex(x => x.Name);

        builder.Property(x => x.Name)
            .HasMaxLength(MaxNameLenght)
            .IsRequired();
    }
}