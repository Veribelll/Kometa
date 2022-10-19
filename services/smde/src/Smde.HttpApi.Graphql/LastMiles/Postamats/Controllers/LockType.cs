using Kometa.Graphql.Abp;
using Kometa.Graphql.Types;
using HotChocolate;
using HotChocolate.Types;
using Smde.LastMiles.Postamats.Cells;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Linq;

namespace Smde.LastMiles.Postamats.Controllers;

public class LockType : ObjectType<Lock>, IGraphqlType
{
    protected override void Configure(IObjectTypeDescriptor<Lock> descriptor)
    {
        descriptor.BindFieldsExplicitly();

        descriptor
            .Entity()
            .MultiTenant()
            .MultiContractor();

        descriptor
            .Field(x => x.Address)
            .Type<NonNullType<StringType>>();

        descriptor
            .Field("cell")
            .ResolveWith<Resolves>(x => x.GetCell(default!, default!, default!, default!, default!))
            .Type<CellType>();
    }

    private class Resolves
    {
        public async Task<Cell?> GetCell(
            [Parent] Lock @lock,
            ICellRepository repository,
            CellDataLoader dataLoader,
            IAsyncQueryableExecuter asyncExecuter,
            CancellationToken cancellationToken)
        {
            var cellId = await asyncExecuter.FirstOrDefaultAsync(
                (await repository.GetQueryableAsync())
                .Where(x => x.LockId == @lock.Id)
                .Select(x => x.Id), cancellationToken);

            return await dataLoader.LoadOrNullAsync(cellId, cancellationToken);
        }
    }
}