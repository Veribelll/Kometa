using Smde.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace Smde.Permissions;

public class TopologyManagementPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var group = context.AddGroup(TopologyManagementPermissions.GroupName,
            L("Permission:TopologyManagement"));

        var templates = group.AddPermission(TopologyManagementPermissions.Templates.Default,
            L("Permission:Templates"));
        templates.AddChild(TopologyManagementPermissions.Templates.Create, L("Permission:Create"));
        templates.AddChild(TopologyManagementPermissions.Templates.Update, L("Permission:Update"));
        templates.AddChild(TopologyManagementPermissions.Templates.Delete, L("Permission:Delete"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<SmdeResource>(name);
    }
}