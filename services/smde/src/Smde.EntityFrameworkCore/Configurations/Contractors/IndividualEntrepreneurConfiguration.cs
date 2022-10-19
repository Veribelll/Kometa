using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Smde.Contractors;
using static Smde.Contractors.IndividualEntrepreneurConstants;

namespace Smde.EntityFrameworkCore.Configurations.Contractors;

public class IndividualEntrepreneurConfiguration : IEntityTypeConfiguration<IndividualEntrepreneur>
{
    public void Configure(EntityTypeBuilder<IndividualEntrepreneur> builder)
    {
        builder.Property(x => x.Ogrnip)
            .HasMaxLength(OgrnipLenght)
            .IsRequired(false);
    }
}