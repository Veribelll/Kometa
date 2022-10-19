using Smde.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace Smde.Permissions;

public class ContractorManagementPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var group = context.AddGroup(ContractorManagementPermissions.GroupName,
            L("Permission:ContractorManagement"));

        var contractors = group.AddPermission(ContractorManagementPermissions.Contractors.Default,
            L("Permission:ContractorManagement"));
        contractors.AddChild(ContractorManagementPermissions.Contractors.Create, L("Permission:Create"));
        contractors.AddChild(ContractorManagementPermissions.Contractors.Update, L("Permission:Update"));
        contractors.AddChild(ContractorManagementPermissions.Contractors.Delete, L("Permission:Delete"));

        var employees = group.AddPermission(ContractorManagementPermissions.Employees.Default,
            L("Permission:EmployeeManagement"));
        employees.AddChild(ContractorManagementPermissions.Employees.Create, L("Permission:Create"));
        employees.AddChild(ContractorManagementPermissions.Employees.Update, L("Permission:Update"));
        employees.AddChild(ContractorManagementPermissions.Employees.Delete, L("Permission:Delete"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<SmdeResource>(name);
    }
}