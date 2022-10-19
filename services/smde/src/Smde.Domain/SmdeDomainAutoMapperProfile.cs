using AutoMapper;
using Smde.Contractors;
using Smde.PackingPlaces;
using Volo.Abp.AutoMapper;

namespace Smde;

public class SmdeDomainAutoMapperProfile : Profile
{
    public SmdeDomainAutoMapperProfile()
    {
        CreateMap<Company, ContractorEto>()
            .Ignore(x=>x.Properties);
        CreateMap<IndividualEntrepreneur, ContractorEto>()
            .Ignore(x => x.Properties);

        CreateMap<PackingPlace, PackingPlaceEto>()
            .Ignore(x => x.Properties);
    }   
}