using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Smde.Emex.Orders;
using Volo.Abp.EntityFrameworkCore.Modeling;
using static Smde.SmdeDbProperties;

namespace Smde.EntityFrameworkCore.Configurations.Emex.Orders;

public class EmexOrderConfiguration : IEntityTypeConfiguration<EmexOrder>
{
    public void Configure(EntityTypeBuilder<EmexOrder> builder)
    {
        builder.ToTable(DbTablePrefix + "EmexOrders", DbSchema);

        builder.ConfigureFullAuditedAggregateRoot();
        builder.ConfigureByConvention();

        builder.HasOne<EmexCustomer>()
            .WithMany()
            .HasForeignKey(x => x.CustomerId)
            .IsRequired();

        builder.HasMany(x => x.Products)
            .WithOne()
            .HasForeignKey(x => x.OrderId)
            .OnDelete(DeleteBehavior.Cascade)
            .IsRequired();

        builder.Navigation(x => x.Products)
            .HasField("_products")
            .UsePropertyAccessMode(PropertyAccessMode.Field)
            .AutoInclude();

        builder.Property(x => x.ExternalId)
            .IsRequired();
    }
}