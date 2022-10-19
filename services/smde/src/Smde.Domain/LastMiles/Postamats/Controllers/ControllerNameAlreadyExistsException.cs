using Volo.Abp;

namespace Smde.LastMiles.Postamats.Controllers;

public class ControllerNameAlreadyExistsException : BusinessException
{
    public string Name { get; }

    public ControllerNameAlreadyExistsException(string name): base("Error:Postamat:Controller:001")
    {
        Name = name;
    }
}