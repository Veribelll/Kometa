using Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations;

namespace Kometa.AspNetCore.Mvc.ApplicationConfigurations;

public class SmdeApplicationConfigurationDto : ApplicationConfigurationDto
{
    public CurrentContractorDto CurrentContractor { get; init; } = new();

    public List<SelectableContractorDto> SelectableContractors { get; init; } = new();
}