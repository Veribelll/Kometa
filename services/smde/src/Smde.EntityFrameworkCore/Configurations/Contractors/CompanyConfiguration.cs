using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Smde.Contractors;
using static Smde.Contractors.CompanyConstants;

namespace Smde.EntityFrameworkCore.Configurations.Contractors;

public class CompanyConfiguration : IEntityTypeConfiguration<Company>
{
    public void Configure(EntityTypeBuilder<Company> builder)
    {
        builder.Property(x => x.Kpp)
            .HasMaxLength(KppLenght)
            .IsRequired(false);

        builder.Property(x => x.Ogrn)
            .HasMaxLength(OgrnLenght)
            .IsRequired(false);
    }
}