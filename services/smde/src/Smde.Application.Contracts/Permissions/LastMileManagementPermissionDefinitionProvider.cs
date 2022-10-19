using Smde.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;
using Volo.Abp.MultiTenancy;

namespace Smde.Permissions;

public class LastMileManagementPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var group = context.AddGroup(LastMileManagementPermissions.GroupName,
            L("Permission:LastMileManagement"));

        var lastMiles = group.AddPermission(LastMileManagementPermissions.LastMiles.Default,
            L("Permission:LastMileManagement"));
        lastMiles.AddChild(LastMileManagementPermissions.LastMiles.Create, L("Permission:Create"));
        lastMiles.AddChild(LastMileManagementPermissions.LastMiles.Update, L("Permission:Update"));
        lastMiles.AddChild(LastMileManagementPermissions.LastMiles.Delete, L("Permission:Delete"));
        lastMiles.AddChild(LastMileManagementPermissions.LastMiles.Activate, L("Permission:LastMiles.Activate"), 
            MultiTenancySides.Host);
        lastMiles.AddChild(LastMileManagementPermissions.LastMiles.ManageSmsTemplate,
            L("Permission:LastMiles.ManageSmsTemplate"));
        lastMiles.AddChild(LastMileManagementPermissions.LastMiles.ManageStoragePeriod,
            L("Permission:LastMiles.ManageStoragePeriod"));
        lastMiles.AddChild(LastMileManagementPermissions.LastMiles.ManageReturnPeriod,
            L("Permission:LastMiles.ManageReturnPeriod"));

        var postamats =
            group.AddPermission(LastMileManagementPermissions.Postamats.Default, L("Permission:PostamatManagement"));
        postamats.AddChild(LastMileManagementPermissions.Postamats.ManageSettings,
            L("Permission:Postamat.ManageSettings"));
        postamats.AddChild(LastMileManagementPermissions.Postamats.ManagePrinters,
            L("Permission:Postamat.ManagePrinters"));
        postamats.AddChild(LastMileManagementPermissions.Postamats.ManageControllers,
            L("Permission:Postamat.ManageControllers"));
        postamats.AddChild(LastMileManagementPermissions.Postamats.ManageCells, L("Permission:Postamat.ManageCells"));
        postamats.AddChild(LastMileManagementPermissions.Postamats.ManageTopology,
            L("Permission:Postamat.ManageTopology"));
        postamats.AddChild(LastMileManagementPermissions.Postamats.PutPackingPlace,
            L("Permission:Postamat.PutPackingPlace"));
        postamats.AddChild(LastMileManagementPermissions.Postamats.IssuePackingPlace,
            L("Permission:Postamat.IssuePackingPlace"));

        var accessKeys = group.AddPermission(LastMileManagementPermissions.AccessKeys.Default,
            L("Permission:LastMileManagement:AccessKeys"));
        accessKeys.AddChild(LastMileManagementPermissions.AccessKeys.Create, L("Permission:Create"));
        accessKeys.AddChild(LastMileManagementPermissions.AccessKeys.Update, L("Permission:Update"));
        accessKeys.AddChild(LastMileManagementPermissions.AccessKeys.Delete, L("Permission:Delete"));

    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<SmdeResource>(name);
    }
}