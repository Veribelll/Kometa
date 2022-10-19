using Kometa.Graphql.DataLoader;
using Kometa.Graphql.Types;
using HotChocolate;
using HotChocolate.Types;
using Volo.Abp.Auditing;
using Volo.Abp.Identity;

namespace Smde.Identity.Extend;

[ExtendObjectType(typeof(IDeletionAuditedObject))]
public class DeletionAuditedExtensions : IGraphqlType
{
    public Task<IdentityUser?> GetDeleter(
        [Parent] IDeletionAuditedObject entity,
        IDataLoader<IdentityUser> dataLoader,
        CancellationToken cancellationToken) =>
        dataLoader.LoadOrNullAsync(entity.DeleterId, cancellationToken);
}