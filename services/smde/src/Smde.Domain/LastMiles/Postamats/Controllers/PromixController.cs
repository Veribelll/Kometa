using Volo.Abp.Guids;

namespace Smde.LastMiles.Postamats.Controllers;

public class PromixController : ControllerBase
{
    protected PromixController()
    {
    }

    internal PromixController(
        Guid id,
        Guid? tenantId,
        Guid contractorId,
        Guid postamatId,
        string name,
        SerialPortSettings settings)
        : base(id, tenantId, contractorId, postamatId, name, settings)
    {
    }

    public void InitLocks(IGuidGenerator guidGenerator, int quantity)
    {
        if (quantity < 1)
        {
            throw new ArgumentOutOfRangeException(nameof(quantity));
        }
            
        ClearLocks();

        for (var i = 0; i < quantity; i++)
        {
            for (var j = 0; j < 8; j++)
            {
                AddLock(guidGenerator,  $"{i}.{j}");
            }
        }
    }
}