using Smde.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace Smde.Permissions;

public class NotificationManagementPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var group = context.AddGroup(NotificationManagementPermissions.GroupName,
            L("Permission:NotificationManagement"));

        var smsAccounts = group.AddPermission(NotificationManagementPermissions.SmsAccounts.Default,
            L("Permission:SmsAccountsManagement"));
        smsAccounts.AddChild(NotificationManagementPermissions.SmsAccounts.Create, L("Permission:Create"));
        smsAccounts.AddChild(NotificationManagementPermissions.SmsAccounts.Update, L("Permission:Update"));
        smsAccounts.AddChild(NotificationManagementPermissions.SmsAccounts.Delete, L("Permission:Delete"));

        var smsMessages = group.AddPermission(NotificationManagementPermissions.SmsMessages.Default,
            L("Permission:SmsMessagesManagement"));
        smsMessages.AddChild(NotificationManagementPermissions.SmsMessages.Send, L("Permission:Create"));

        var smsTemplates = group.AddPermission(NotificationManagementPermissions.SmsTemplates.Default,
            L("Permission:SmsTemplatesManagement"));
        smsTemplates.AddChild(NotificationManagementPermissions.SmsTemplates.Create, L("Permission:Create"));
        smsTemplates.AddChild(NotificationManagementPermissions.SmsTemplates.Update, L("Permission:Update"));
        smsTemplates.AddChild(NotificationManagementPermissions.SmsTemplates.Delete, L("Permission:Delete"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<SmdeResource>(name);
    }
}