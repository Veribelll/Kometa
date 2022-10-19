using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Smde.Orders;
using Smde.PackingPlaces.ShipmentRequests;
using Volo.Abp.EntityFrameworkCore.Modeling;
using Volo.Abp.Identity;
using static Smde.PackingPlaces.ShipmentRequests.ShipmentRequestConstants;
using static Smde.SmdeDbProperties;

namespace Smde.EntityFrameworkCore.Configurations.PackingPlaces.ShipmentRequests;

public class ShipmentRequestConfiguration : IEntityTypeConfiguration<ShipmentRequest>
{
    public void Configure(EntityTypeBuilder<ShipmentRequest> builder)
    {
        builder.ToTable(DbTablePrefix + "ShipmentRequests", DbSchema);

        builder.ConfigureFullAuditedAggregateRoot();
        builder.ConfigureByConvention();

        builder.HasOne<IdentityUser>()
            .WithMany()
            .HasForeignKey(x => x.CourierId)
            .IsRequired();

        builder.HasMany(x => x.ChangesHistory)
            .WithOne()
            .HasForeignKey(x => x.ShipmentRequestId)
            .IsRequired();

        builder.Navigation(x => x.ChangesHistory)
            .HasField("_changesHistory")
            .UsePropertyAccessMode(PropertyAccessMode.Field)
            .AutoInclude();

        builder.Property(x => x.Status)
            .HasConversion(
                x => x.Value,
                x => ShipmentRequestStatus.FromValue(x))
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