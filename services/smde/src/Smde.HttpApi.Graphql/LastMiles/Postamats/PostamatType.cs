using Kometa.Graphql.Abp;
using Kometa.Graphql.Types;
using HotChocolate;
using HotChocolate.Types;
using Smde.Identity;
using Smde.LastMiles.AccessKeys;
using Smde.LastMiles.Postamats.Cells;
using Smde.LastMiles.Postamats.Controllers;
using Smde.LastMiles.Postamats.Printers;
using Volo.Abp.Identity;

namespace Smde.LastMiles.Postamats;

public class PostamatType : ObjectType<Postamat>, IGraphqlType
{
    protected override void Configure(IObjectTypeDescriptor<Postamat> descriptor)
    {
        descriptor.BindFieldsExplicitly();

        descriptor.Implements<LastMileType>();

        descriptor
            .Entity(nameof(LastMile))
            .FullAudited()
            .MultiTenant()
            .MultiContractor();

        descriptor
            .Field(x => x.Status)
            .Type<NonNullType<EnumType<LastMileStatus>>>();

        descriptor
            .Field(x => x.DefaultCourierId)
            .ID(nameof(IdentityUser));

        descriptor
            .Field(x => x.Name)
            .Type<NonNullType<StringType>>();

        descriptor
            .Field(x => x.FactoryNumber)
            .Type<NonNullType<StringType>>();

        descriptor
            .Field(x => x.ExternalId)
            .Type<NonNullType<StringType>>();

        descriptor
            .Field(x => x.Token)
            .Type<NonNullType<StringType>>();

        descriptor
            .Field(x => x.Address)
            .Type<NonNullType<StringType>>();

        descriptor
            .Field(x => x.Token)
            .Type<NonNullType<StringType>>();

        descriptor
            .Field(x => x.Settings)
            .Type<NonNullType<PostamatSettingsType>>();

        descriptor
            .Field(x => x.AccountIds)
            .Type<NonNullType<LastMileAccountIdsType>>();

        descriptor
            .Field(x => x.Scanner)
            .Type<NonNullType<PostamatScannerType>>();

        descriptor
            .Field(x => x.FilePrinter)
            .Type<NonNullType<FilePrinterType>>();

        descriptor
            .Field(x => x.NetworkPrinter)
            .Type<NonNullType<NetworkPrinterType>>();

        descriptor
            .Field(x => x.SerialPrinter)
            .Type<NonNullType<SerialPrinterType>>();

        descriptor
            .Field(x => x.StoragePeriods)
            .UseFiltering()
            .UseSorting()
            .Type<NonNullType<ListType<NonNullType<LastMileStoragePeriodType>>>>();

        descriptor
            .Field(x => x.ReturnPeriods)
            .UseFiltering()
            .UseSorting()
            .Type<NonNullType<ListType<NonNullType<LastMileReturnPeriodType>>>>();

        descriptor
            .Field(x => x.AccessKeys)
            .UseFiltering(typeof(AccessKeyFilterType))
            .UseSorting(typeof(AccessKeySortType))
            .Type<NonNullType<ListType<NonNullType<AccessKeyType>>>>();

        descriptor
            .Field(x => x.Cells)
            .UseFiltering(typeof(CellFilterType))
            .UseSorting()
            .Type<NonNullType<ListType<NonNullType<CellType>>>>();

        descriptor
            .Field(x => x.Controllers)
            .UseFiltering(typeof(ControllerFilterType))
            .UseSorting()
            .Type<NonNullType<ListType<NonNullType<ControllerType>>>>();

        descriptor
            .Field(x => x.Displays)
            .UseFiltering(typeof(CellDisplayFilterType))
            .UseSorting()
            .Type<NonNullType<ListType<NonNullType<CellDisplayType>>>>();

        descriptor
            .Field(x => x.SmsTemplates)
            .UseFiltering(typeof(LastMileSmsTemplateFilterType))
            .UseSorting()
            .Type<NonNullType<ListType<NonNullType<LastMileSmsTemplateType>>>>();

        descriptor
            .Field("defaultCourier")
            .ResolveWith<Resolves>(r => r.GetDefaultCourier(default!, default!, default!))
            .Type<NonNullType<IdentityUserType>>();
    }

    private class Resolves
    {
        public Task<IdentityUser> GetDefaultCourier(
            [Parent] Postamat postamat,
            IdentityUserDataLoader dataLoader,
            CancellationToken cancellationToken) =>
            dataLoader.LoadAsync(postamat.DefaultCourierId, cancellationToken);
    }
}