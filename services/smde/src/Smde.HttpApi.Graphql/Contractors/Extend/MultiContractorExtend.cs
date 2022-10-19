using Kometa.Graphql.DataLoader;
using Kometa.Graphql.Types;
using Kometa.MultiContractor.Current;
using HotChocolate;
using HotChocolate.Types;

namespace Smde.Contractors.Extend;

[ExtendObjectType(typeof(IMultiContractor))]
internal class MultiContractorExtend : IGraphqlType
{
    public Task<Contractor> GetContractor(
        [Parent] IMultiContractor entity,
        IDataLoader<Contractor> dataLoader,
        CancellationToken cancellationToken) =>
        dataLoader.LoadAsync(entity.ContractorId, cancellationToken);
}