using Microsoft.AspNetCore.Mvc;
using Volo.Abp;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc.AntiForgery;

namespace Kometa.AspNetCore.Mvc.ApplicationConfigurations;

[Area("abp")]
[RemoteService(Name = "abp")]
[Route("api/abp/application-configuration")]
public class KometaApplicationConfigurationController : AbpController, IKometaApplicationConfigurationAppService
{
    private readonly IKometaApplicationConfigurationAppService _applicationConfigurationAppService;
    private readonly IAbpAntiForgeryManager _antiForgeryManager;

    public KometaApplicationConfigurationController(
        IKometaApplicationConfigurationAppService applicationConfigurationAppService,
        IAbpAntiForgeryManager antiForgeryManager)
    {
        _applicationConfigurationAppService = applicationConfigurationAppService;
        _antiForgeryManager = antiForgeryManager;
    }

    [HttpGet]
    public async Task<SmdeApplicationConfigurationDto> GetAsync()
    {
        _antiForgeryManager.SetCookie();
        return await _applicationConfigurationAppService.GetAsync();
    }
}