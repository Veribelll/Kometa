using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Smde.Emex.Orders;

namespace Smde.EntityFrameworkCore.Configurations.Emex.Orders;

public class EmexCustomerConfiguration : IEntityTypeConfiguration<EmexCustomer>
{
    public void Configure(EntityTypeBuilder<EmexCustomer> builder)
    {
    }
}