using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.BlobStoring;
using Volo.Abp.Threading;
using static Smde.Permissions.TopologyManagementPermissions.Templates;

namespace Smde.Controllers;

[Controller]
[RemoteService(Name = SmdeRemoteServiceConstants.RemoteServiceName)]
[Area("topologyManagement")]
[Route("api/topology-management/templates-cell")]
public class TemplateCellController : AbpControllerBase
{
    protected readonly IBlobContainer BlobContainer;
    protected readonly ICancellationTokenProvider CancellationTokenProvider;

    public TemplateCellController(
        IBlobContainer blobContainer,
        ICancellationTokenProvider cancellationTokenProvider)
    {
        BlobContainer = blobContainer;
        CancellationTokenProvider = cancellationTokenProvider;
    }

    [HttpGet]
    [Route("{id:guid}/image")]
    public async Task<IActionResult> GetImage(Guid id)
    {
        var cancellationToken = CancellationTokenProvider.Token;
        
        if (await BlobContainer.ExistsAsync(id.ToString(), cancellationToken))
        {
            var image = await BlobContainer.GetAsync(id.ToString(), cancellationToken);
            return File(image, "image/jpeg");
        }

        return NoContent();
    }

    [Authorize(Policy = Update)]
    [HttpPost]
    [Route("{id:guid}/image")]
    public async Task<IActionResult> SetImage(Guid id, IFormFile file)
    {
        var cancellationToken = CancellationTokenProvider.Token;
        await using var image = file.OpenReadStream();
        await BlobContainer.SaveAsync(id.ToString(), image, true, cancellationToken);
        return Ok();
    }
}