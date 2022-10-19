using Volo.Abp;

namespace Smde.LastMiles;

public class LastMileNameAlreadyExistsException : BusinessException
{
    public string Name { get; }

    public LastMileNameAlreadyExistsException(string name) : base("Error:LastMile:001")
    {
        Name = name;
    }
}