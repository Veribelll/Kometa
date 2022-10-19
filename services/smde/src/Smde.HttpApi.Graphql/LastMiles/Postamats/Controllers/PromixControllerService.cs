using Kometa.Graphql;
using Volo.Abp.Domain.Repositories;

namespace Smde.LastMiles.Postamats.Controllers;

public class PromixControllerService : GraphqlService, IPromixControllerService
{
    protected readonly IRepository<Postamat, Guid> Repository;

    public PromixControllerService(IRepository<Postamat, Guid> repository)
    {
        Repository = repository;
    }

    public async Task<PromixController> CreateAsync(CreatePromixControllerInput input)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var postamat = await Repository.GetAsync(input.PostamatId, true, cancellationToken);

        var settings = input.Settings;
        var controller = postamat.Controllers.AddPromix(GuidGenerator.Create(), input.Name, settings.ToEntity());
        controller.InitLocks(GuidGenerator, input.Quantity);

        await Repository.UpdateAsync(postamat, true, cancellationToken);

        return controller;
    }

    public async Task<PromixController> UpdateAsync(UpdatePromixControllerInput input)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var postamat = await Repository.GetAsync(input.PostamatId, true, cancellationToken);
        var controllers = postamat.Controllers;

        controllers.SetName(input.ControllerId, input.Name);
        controllers.SetSettings(input.ControllerId, input.Settings.ToEntity());

        await Repository.UpdateAsync(postamat, true, cancellationToken);

        return controllers.GetPromix(input.ControllerId);
    }

    public async Task<PromixController> DeleteAsync(Guid postamatId, Guid controllerId)
    {
        var cancellationToken = CancellationTokenProvider.Token;

        var postamat = await Repository.GetAsync(postamatId, true, cancellationToken);
        var controller = postamat.Controllers.GetPromix(controllerId);

        postamat.Controllers.Remove(controllerId);

        await Repository.UpdateAsync(postamat, true, cancellationToken);

        return controller;
    }
}