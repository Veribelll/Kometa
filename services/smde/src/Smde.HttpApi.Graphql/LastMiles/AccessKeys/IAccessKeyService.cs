using Kometa.Graphql;

namespace Smde.LastMiles.AccessKeys;

public interface IAccessKeyService : IGraphqlService
{
    Task<AccessKey> CreateAsync(CreateAccessKeyInput input);
    Task<AccessKey> UpdateAsync(UpdateAccessKeyInput input);
    Task<AccessKey> DeleteAsync(Guid lastMileId, Guid id);
}