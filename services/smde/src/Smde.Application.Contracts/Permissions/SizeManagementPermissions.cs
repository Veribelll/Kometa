namespace Smde.Permissions;

public class SizeManagementPermissions
{
    public const string GroupName = "SizeManagement";

    public static class Sizes
    {
        public const string Default = GroupName + ".Sizes";
        public const string Create = Default + ".Create";
        public const string Update = Default + ".Update";
        public const string Delete = Default + ".Delete";
    }
}