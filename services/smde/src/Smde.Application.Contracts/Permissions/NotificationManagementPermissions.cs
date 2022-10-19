namespace Smde.Permissions;

public class NotificationManagementPermissions
{
    public const string GroupName = "NotificationManagement";

    public static class SmsAccounts
    {
        public const string Default = GroupName + ".SmsAccounts";
        public const string Create = Default + ".Create";
        public const string Update = Default + ".Update";
        public const string Delete = Default + ".Delete";
    }
    
    public static class SmsMessages
    {
        public const string Default = GroupName + ".SmsMessages";
        public const string Send = Default + ".Send";
    }

    public static class SmsTemplates
    {
        public const string Default = GroupName + ".SmsTemplates";
        public const string Create = Default + ".Create";
        public const string Update = Default + ".Update";
        public const string Delete = Default + ".Delete";
    }
}