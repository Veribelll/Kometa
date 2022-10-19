using Kometa.Graphql.DataLoader;
using Kometa.Graphql.Types;
using HotChocolate;
using HotChocolate.Types;
using Volo.Abp.Auditing;
using Volo.Abp.Identity;

namespace Smde.Identity.Extend;

[ExtendObjectType(typeof(IMayHaveCreator))]
public class MayHaveCreatorExtensions : IGraphqlType
{
    public Task<IdentityUser?> GetCreator(
        [Parent] IMayHaveCreator entity,
        IDataLoader<IdentityUser> dataLoader,
        CancellationToken cancellationToken) =>
        dataLoader.LoadOrNullAsync(entity.CreatorId, cancellationToken);
}