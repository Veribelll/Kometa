using Smde.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace Smde.Permissions;

public class SizeManagementPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var group = context.AddGroup(SizeManagementPermissions.GroupName,
            L("Permission:SizeManagement"));

        var sizes = group.AddPermission(SizeManagementPermissions.Sizes.Default,
            L("Permission:SizeManagement"));
        sizes.AddChild(SizeManagementPermissions.Sizes.Create, L("Permission:Create"));
        sizes.AddChild(SizeManagementPermissions.Sizes.Update, L("Permission:Update"));
        sizes.AddChild(SizeManagementPermissions.Sizes.Delete, L("Permission:Delete"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<SmdeResource>(name);
    }
}