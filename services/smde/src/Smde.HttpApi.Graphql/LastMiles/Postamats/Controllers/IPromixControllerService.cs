using Kometa.Graphql;

namespace Smde.LastMiles.Postamats.Controllers;

public interface IPromixControllerService : IGraphqlService
{
    Task<PromixController> CreateAsync(CreatePromixControllerInput input);
    Task<PromixController> UpdateAsync(UpdatePromixControllerInput input);
    Task<PromixController> DeleteAsync(Guid postamatId, Guid controllerId);
}