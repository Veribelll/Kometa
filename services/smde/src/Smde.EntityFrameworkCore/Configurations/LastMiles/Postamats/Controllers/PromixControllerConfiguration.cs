using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Smde.LastMiles.Postamats.Controllers;

namespace Smde.EntityFrameworkCore.Configurations.LastMiles.Postamats.Controllers;

public class PromixControllerConfiguration : IEntityTypeConfiguration<PromixController>
{
    public void Configure(EntityTypeBuilder<PromixController> builder)
    {
    }
}