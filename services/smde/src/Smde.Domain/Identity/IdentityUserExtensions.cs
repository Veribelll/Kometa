using Volo.Abp.Data;
using Volo.Abp.Identity;
using static Smde.Identity.IdentityUserConstants;

namespace Smde.Identity;

public static class IdentityUserExtensions
{
    public static void SetMiddleName(this IdentityUser user, string? value)
    {
        user.SetProperty(NamePropertyMiddleName, value);
    }

    public static string? GetMiddleName(this IdentityUser user)
    {
        return user.GetProperty<string?>(NamePropertyMiddleName, null);
    }

    public static void SetIsEmployee(this IdentityUser user, bool value)
    {
        user.SetProperty(NamePropertyIsEmployee, value);
    }

    public static bool GetIsEmployee(this IdentityUser user)
    {
        return user.GetProperty(NamePropertyIsEmployee, false);
    }

    public static void SetContractorIds(this IdentityUser user, IEnumerable<Guid> ids)
    {
        user.SetProperty(NamePropertyContractorIds, ids.ToList());
    }

    public static void AddContractorId(this IdentityUser user, Guid contractorId)
    {
        var contractorIds = new List<Guid>(user.GetContractorIds()) { contractorId };
        user.SetContractorIds(contractorIds.Distinct());
    }

    public static void RemoveContractorId(this IdentityUser user, Guid contractorId)
    {
        var contractorIds = user.GetContractorIds().ToList();
        contractorIds.Remove(contractorId);
        user.SetContractorIds(contractorIds.Distinct());
    }

    public static IReadOnlyList<Guid> GetContractorIds(this IdentityUser user)
    {
        return (List<Guid>?)user.GetProperty(NamePropertyContractorIds) ?? new List<Guid>();
    }
}