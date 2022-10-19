using Kometa.Graphql.DataLoader;
using Kometa.Graphql.Types;
using HotChocolate;
using HotChocolate.Types;
using Volo.Abp.Auditing;
using Volo.Abp.Identity;

namespace Smde.Identity.Extend;

[ExtendObjectType(typeof(IModificationAuditedObject))]
public class ModificationAuditedExtensions : IGraphqlType
{
    public Task<IdentityUser?> GetLastModifier(
        [Parent] IModificationAuditedObject entity,
        IDataLoader<IdentityUser> dataLoader,
        CancellationToken cancellationToken) =>
        dataLoader.LoadOrNullAsync(entity.LastModifierId, cancellationToken);
}