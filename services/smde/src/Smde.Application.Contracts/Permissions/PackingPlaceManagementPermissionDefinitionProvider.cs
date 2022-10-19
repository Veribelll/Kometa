using Smde.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace Smde.Permissions;

public class PackingPlaceManagementPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var group = context.AddGroup(PackingPlaceManagementPermissions.GroupName,
            L("Permission:PackingPlaceManagement"));

        var packingPlaces = group.AddPermission(PackingPlaceManagementPermissions.PackingPlaces.Default,
            L("Permission:PackingPlaceManagement"));
        packingPlaces.AddChild(PackingPlaceManagementPermissions.PackingPlaces.Create, L("Permission:Create"));
        packingPlaces.AddChild(PackingPlaceManagementPermissions.PackingPlaces.Update, L("Permission:Update"));
        packingPlaces.AddChild(PackingPlaceManagementPermissions.PackingPlaces.Delete, L("Permission:Delete"));
        packingPlaces.AddChild(PackingPlaceManagementPermissions.PackingPlaces.Send, L("Permission:PackingPlace:Send"));

        var shipmentRequests = group.AddPermission(PackingPlaceManagementPermissions.ShipmentRequests.Default,
            L("Permission:ShipmentRequests"));
        shipmentRequests.AddChild(PackingPlaceManagementPermissions.ShipmentRequests.Create,
            L("Permission:Create"));
        shipmentRequests.AddChild(PackingPlaceManagementPermissions.ShipmentRequests.Update,
            L("Permission:Update"));
        shipmentRequests.AddChild(PackingPlaceManagementPermissions.ShipmentRequests.Delete,
            L("Permission:Delete"));
        shipmentRequests.AddChild(PackingPlaceManagementPermissions.ShipmentRequests.Cancel,
            L("Permission:Cancel"));

        var returnRequests = group.AddPermission(PackingPlaceManagementPermissions.ReturnRequests.Default,
            L("Permission:ReturnRequests"));
        returnRequests.AddChild(PackingPlaceManagementPermissions.ReturnRequests.Create, L("Permission:Create"));
        returnRequests.AddChild(PackingPlaceManagementPermissions.ReturnRequests.Update, L("Permission:Update"));
        returnRequests.AddChild(PackingPlaceManagementPermissions.ReturnRequests.Delete, L("Permission:Delete"));
        returnRequests.AddChild(PackingPlaceManagementPermissions.ReturnRequests.Cancel, L("Permission:Cancel"));
        returnRequests.AddChild(PackingPlaceManagementPermissions.ReturnRequests.Return,
            L("Permission:ReturnRequests.Return"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<SmdeResource>(name);
    }
}