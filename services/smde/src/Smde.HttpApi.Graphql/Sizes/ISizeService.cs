using Kometa.Graphql;

namespace Smde.Sizes;

public interface ISizeService : IGraphqlService
{
    Task<Size> CreateAsync(CreateSizeInput input);
    Task<Size> UpdateAsync(UpdateSizeInput input);
    Task<Size> DeleteAsync(Guid id);
}