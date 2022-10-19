using Kometa.Graphql.Types;
using HotChocolate;
using HotChocolate.Types;
using Volo.Abp.Domain.Repositories;

namespace Smde.Contractors.Extend;

[ExtendObjectType(typeof(ContractorNameAlreadyExistsException))]
public class ContractorNameAlreadyExistsExceptionExtend : IGraphqlType
{
    public Task<Contractor> GetContractor(
        [Parent] ContractorNameAlreadyExistsException error,
        IRepository<Contractor, Guid> repository,
        CancellationToken cancellationToken) =>
        repository.GetAsync(x => x.Name == error.Name, true, cancellationToken);
}