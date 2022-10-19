namespace Smde.Permissions;

public class TopologyManagementPermissions
{
    public const string GroupName = "TopologyManagement";

    public static class Templates
    {
        public const string Default = GroupName + ".Templates";
        public const string Create = Default + ".Create";
        public const string Update = Default + ".Update";
        public const string Delete = Default + ".Delete";
    }
}