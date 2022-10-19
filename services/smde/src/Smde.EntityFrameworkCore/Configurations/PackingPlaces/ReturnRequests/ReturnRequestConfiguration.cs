using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Smde.PackingPlaces.ReturnRequests;
using Volo.Abp.EntityFrameworkCore.Modeling;
using Volo.Abp.Identity;
using static Smde.PackingPlaces.ReturnRequests.ReturnRequestConstants;
using static Smde.SmdeDbProperties;

namespace Smde.EntityFrameworkCore.Configurations.PackingPlaces.ReturnRequests;

public class ReturnRequestConfiguration : IEntityTypeConfiguration<ReturnRequest>
{
    public void Configure(EntityTypeBuilder<ReturnRequest> builder)
    {
        builder.ToTable(DbTablePrefix + "ReturnRequests", DbSchema);

        builder.ConfigureFullAuditedAggregateRoot();
        builder.ConfigureByConvention();

        builder.HasOne<IdentityUser>()
            .WithMany()
            .HasForeignKey(x => x.CourierId)
            .IsRequired();
        
        builder.HasMany(x => x.ChangesHistory)
            .WithOne()
            .HasForeignKey(x => x.ReturnRequestId)
            .IsRequired();

        builder.Navigation(x => x.ChangesHistory)
            .HasField("_changesHistory")
            .UsePropertyAccessMode(PropertyAccessMode.Field)
            .AutoInclude();

        builder.Property(x => x.Status)
            .HasConversion(
                x => x.Value,
                x => ReturnRequestStatus.FromValue(x))
            .IsRequired();

        builder.Property(x => x.Code)
            .HasMaxLength(MaxCodeLenght)
            .IsRequired();

        builder.Property(x => x.Cause)
            .HasMaxLength(MaxCauseLenght)
            .IsRequired(false);

        builder.Property(x => x.Comment)
            .HasMaxLength(MaxCommentLenght)
            .IsRequired(false);
        
    }
}