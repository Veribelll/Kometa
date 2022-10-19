using Kometa.Graphql.Types;
using HotChocolate;
using HotChocolate.Types;
using Volo.Abp.Domain.Repositories;

namespace Smde.Contractors.Extend;

[ExtendObjectType(typeof(ContractorInnAlreadyExistsException))]
public class ContractorInnAlreadyExistsExceptionExtend : IGraphqlType
{
    public Task<Contractor> GetContractor(
        [Parent] ContractorInnAlreadyExistsException error,
        IRepository<Contractor, Guid> repository,
        CancellationToken cancellationToken) =>
        repository.GetAsync(x => x.Inn == error.Inn, true, cancellationToken);
}