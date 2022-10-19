using Smde.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace Smde.Permissions;

public class EmexPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var group = context.AddGroup(EmexPermissions.GroupName,
            L("Permission:Emex"));

        var orders = group.AddPermission(EmexPermissions.Orders.Default,
            L("Permission:EmexOrderManagement"));
        orders.AddChild(EmexPermissions.Orders.Create, L("Permission:Create"));
        orders.AddChild(EmexPermissions.Orders.Update, L("Permission:Update"));
        orders.AddChild(EmexPermissions.Orders.Delete, L("Permission:Delete"));

        var accounts = group.AddPermission(EmexPermissions.Accounts.Default,
            L("Permission:EmexAccountManagement"));
        accounts.AddChild(EmexPermissions.Accounts.Create, L("Permission:Create"));
        accounts.AddChild(EmexPermissions.Accounts.Update, L("Permission:Update"));
        accounts.AddChild(EmexPermissions.Accounts.Delete, L("Permission:Delete"));

        var customers = group.AddPermission(EmexPermissions.Customers.Default,
            L("Permission:EmexCustomerManagement"));
        customers.AddChild(EmexPermissions.Customers.Create, L("Permission:Create"));
        customers.AddChild(EmexPermissions.Customers.Update, L("Permission:Update"));
        customers.AddChild(EmexPermissions.Customers.Delete, L("Permission:Delete"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<SmdeResource>(name);
    }
}