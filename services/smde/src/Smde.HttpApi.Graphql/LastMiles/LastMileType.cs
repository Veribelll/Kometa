using Kometa.Graphql.Abp;
using HotChocolate.Types;
using Smde.LastMiles.AccessKeys;

namespace Smde.LastMiles;

public class LastMileType : InterfaceType<LastMile>
{
    protected override void Configure(IInterfaceTypeDescriptor<LastMile> descriptor)
    {
        descriptor.BindFieldsExplicitly();

        descriptor
            .Entity()
            .FullAudited()
            .MultiTenant()
            .MultiContractor();

        descriptor
            .Field(x => x.Id)
            .ID();

        descriptor
            .Field(x => x.Status)
            .Type<NonNullType<EnumType<LastMileStatus>>>();

        descriptor
            .Field(x => x.Name)
            .Type<NonNullType<StringType>>();

        descriptor
            .Field(x => x.ExternalId)
            .Type<NonNullType<StringType>>();

        descriptor
            .Field(x => x.Address)
            .Type<NonNullType<StringType>>();

        descriptor
            .Field(x => x.AccountIds)
            .Type<NonNullType<LastMileAccountIdsType>>();

        descriptor
            .Field(x => x.Token)
            .Type<NonNullType<StringType>>();

        descriptor
            .Field(x => x.StoragePeriods)
            .Type<NonNullType<ListType<NonNullType<LastMileStoragePeriodType>>>>();

        descriptor
            .Field(x => x.ReturnPeriods)
            .Type<NonNullType<ListType<NonNullType<LastMileReturnPeriodType>>>>();

        descriptor
            .Field(x => x.AccessKeys)
            .Type<NonNullType<ListType<NonNullType<AccessKeyType>>>>();

        descriptor
            .Field(x => x.SmsTemplates)
            .Type<NonNullType<ListType<NonNullType<LastMileSmsTemplateType>>>>();
    }
}