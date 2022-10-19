namespace Kometa.AspNetCore.Mvc.ApplicationConfigurations;

[Serializable]
public class CurrentContractorDto
{
    public Guid? Id { get; init; }
    public string? Name { get; init; }
}