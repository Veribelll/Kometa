namespace Kometa.AspNetCore.Mvc.ApplicationConfigurations;

public interface IKometaApplicationConfigurationAppService
{
    Task<SmdeApplicationConfigurationDto> GetAsync();
}