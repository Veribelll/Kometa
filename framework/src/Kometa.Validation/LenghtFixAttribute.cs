using System.ComponentModel.DataAnnotations;

namespace Kometa.Validation;

[AttributeUsage(AttributeTargets.Property | AttributeTargets.Field | AttributeTargets.Parameter)]
public class LenghtFixAttribute : ValidationAttribute
{
    public int Lenght { get; }

    public LenghtFixAttribute(int lenght) : base("The length of the string must be {0}.")
    {
        if (lenght < 0)
        {
            throw new ArgumentOutOfRangeException(nameof(lenght));
        }

        Lenght = lenght;
    }

    public override bool IsValid(object? value)
    {
        if (value == null)
        {
            return true;
        }

        var length = ((string)value).Length;
        return length == Lenght;
    }

    public override string FormatErrorMessage(string name)
    {
        return string.Format(ErrorMessage ?? "", Lenght);
    }
}