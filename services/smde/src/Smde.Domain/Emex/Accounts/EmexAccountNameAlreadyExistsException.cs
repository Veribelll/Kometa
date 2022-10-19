using Volo.Abp;

namespace Smde.Emex.Accounts;

public class EmexAccountNameAlreadyExistsException: BusinessException
{
    public string Name { get; }
    
    public EmexAccountNameAlreadyExistsException(string name) : base("Error:Account:001")
    {
        Name = name;
    }
}