using Volo.Abp;

namespace Smde.Sizes;

public class SizeNameAlreadyExistsException : BusinessException
{
    public string Name { get; }

    public SizeNameAlreadyExistsException(string name): base("Error:Size:001")
    {
        Name = name;
        WithData("Name", name);
    }
}