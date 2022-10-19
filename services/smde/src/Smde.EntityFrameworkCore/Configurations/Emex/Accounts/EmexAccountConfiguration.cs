using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Smde.Emex.Accounts;
using Volo.Abp.EntityFrameworkCore.Modeling;
using static Smde.Emex.Accounts.EmexAccountConstants;
using static Smde.SmdeDbProperties;

namespace Smde.EntityFrameworkCore.Configurations.Emex.Accounts;

public class EmexAccountConfiguration : IEntityTypeConfiguration<EmexAccount>
{
    public void Configure(EntityTypeBuilder<EmexAccount> builder)
    {
        builder.ToTable(DbTablePrefix + "EmexAccounts", DbSchema);

        builder.ConfigureFullAuditedAggregateRoot();
        builder.ConfigureByConvention();

        builder.Property(x => x.UserId)
            .IsRequired();

        builder.Property(x => x.Name)
            .HasMaxLength(MaxNameLenght)
            .IsRequired();

        builder.Property(x => x.Password)
            .HasMaxLength(MaxPasswordLenght)
            .IsRequired();
    }
}