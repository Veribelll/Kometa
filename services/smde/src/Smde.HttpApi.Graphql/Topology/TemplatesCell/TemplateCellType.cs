using Kometa.Graphql.Abp;
using Kometa.Graphql.DataLoader;
using Kometa.Graphql.Types;
using HotChocolate;
using HotChocolate.Types;
using Smde.Sizes;

namespace Smde.Topology.TemplatesCell;

public class TemplateCellType : ObjectType<TemplateCell>, IGraphqlType
{
    protected override void Configure(IObjectTypeDescriptor<TemplateCell> descriptor)
    {
        descriptor.BindFieldsExplicitly();

        descriptor
            .Entity()
            .FullAudited()
            .MultiTenant();

        descriptor
            .Field(x => x.Name)
            .Type<NonNullType<StringType>>();

        descriptor
            .Field(x => x.Width)
            .Type<NonNullType<IntType>>();

        descriptor
            .Field(x => x.Height)
            .Type<NonNullType<IntType>>();

        descriptor
            .Field(x => x.IsCell)
            .Type<NonNullType<BooleanType>>();

        descriptor
            .Field(x => x.ImageUrl)
            .Type<StringType>();

        descriptor
            .Field(x => x.SizeId)
            .IsProjected()
            .ID(nameof(Size));

        descriptor
            .Field("size")
            .ResolveWith<Resolves>(x => x.GetSize(default!, default!, default!))
            .Type<SizeType>();
    }

    private class Resolves
    {
        public Task<Size?> GetSize(
            [Parent] TemplateCell templateCell,
            IDataLoader<Size> dataLoader,
            CancellationToken cancellationToken) =>
            dataLoader.LoadOrNullAsync(templateCell.SizeId, cancellationToken);
    }
}