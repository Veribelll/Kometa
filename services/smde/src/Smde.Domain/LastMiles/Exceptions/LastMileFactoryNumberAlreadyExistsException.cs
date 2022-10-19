using Volo.Abp;

namespace Smde.LastMiles;

public class LastMileFactoryNumberAlreadyExistsException : BusinessException
{
    public string FactoryNumber { get; }

    public LastMileFactoryNumberAlreadyExistsException(string factoryNumber) : base("Error:LastMile:003")
    {
        FactoryNumber = factoryNumber;
    }
}