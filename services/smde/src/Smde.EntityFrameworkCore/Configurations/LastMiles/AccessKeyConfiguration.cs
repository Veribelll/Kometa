using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Smde.LastMiles.AccessKeys;
using Volo.Abp.EntityFrameworkCore.Modeling;
using Volo.Abp.Identity;
using static Smde.LastMiles.AccessKeys.AccessKeyConstants;
using static Smde.SmdeDbProperties;

namespace Smde.EntityFrameworkCore.Configurations.LastMiles;

public class AccessKeyConfiguration : IEntityTypeConfiguration<AccessKey>
{
    public void Configure(EntityTypeBuilder<AccessKey> builder)
    {
        builder.ToTable(DbTablePrefix + "AccessKeys", DbSchema);

        builder.ConfigureByConvention();
        builder.TryConfigureFullAudited();

        builder.HasOne<IdentityUser>()
            .WithMany()
            .HasForeignKey(x => x.IdentityUserId)
            .IsRequired();

        builder.Property(x => x.Barcode)
            .HasMaxLength(MaxBarcodeLenght)
            .IsRequired();
    }
}