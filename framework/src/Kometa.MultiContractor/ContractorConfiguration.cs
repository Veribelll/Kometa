using Volo.Abp;

namespace Kometa.MultiContractor;

[Serializable]
public class ContractorConfiguration
{
    public Guid Id { get; set; }

    public string Name { get; set; } = string.Empty;

    public bool IsActive { get; set; }

    protected ContractorConfiguration()
    {
        IsActive = true;
    }

    public ContractorConfiguration(Guid id, string name) : this()
    {
        Check.NotNull(name, nameof(name));

        Id = id;
        Name = name;
    }
}