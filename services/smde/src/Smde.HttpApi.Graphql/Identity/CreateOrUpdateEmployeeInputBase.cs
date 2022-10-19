using System.ComponentModel.DataAnnotations;
using HotChocolate.Types.Relay;
using Smde.Contractors;
using Volo.Abp.Identity;
using static Smde.Employees.EmployeeConstants;

namespace Smde.Identity;

public class CreateOrUpdateEmployeeInputBase
{
    /// <summary>
    /// Фамилия
    /// </summary>
    [Required]
    [StringLength(MaxSurnameLenght)]
    public string Surname { get; set; } = default!;

    /// <summary>
    /// Имя
    /// </summary>
    [Required]
    [StringLength(MaxFirstNameLenght)]
    public string FirstName { get; set; } = default!;

    /// <summary>
    /// Отчество
    /// </summary>
    [StringLength(MaxMiddleNameLenght)]
    public string? MiddleName { get; set; }

    /// <summary>
    /// Номер телефона
    /// </summary>
    [Required]
    [StringLength(MaxPhoneNumberLenght, MinimumLength = MinPhoneNumberLenght)]
    public string PhoneNumber { get; set; } = default!;

    /// <summary>
    /// Контрагенты
    /// </summary>
    [Required]
    [MinLength(1)]
    [ID(nameof(Contractor))]
    public ICollection<Guid> ContractorIds { get; set; } = default!;

    /// <summary>
    /// Роли
    /// </summary>
    [Required]
    [MinLength(1)]
    [ID(nameof(IdentityRole))]
    public ICollection<Guid> RoleIds { get; set; } = default!;
}