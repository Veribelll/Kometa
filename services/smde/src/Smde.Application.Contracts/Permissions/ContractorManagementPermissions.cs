namespace Smde.Permissions;

public static class ContractorManagementPermissions
{
    public const string GroupName = "ContractorManagement";

    public static class Contractors
    {
        public const string Default = GroupName + ".Contractors";
        public const string Create = Default + ".Create";
        public const string Update = Default + ".Update";
        public const string Delete = Default + ".Delete";
    }

    public static class Employees
    {
        public const string Default = GroupName + ".Employees";
        public const string Create = Default + ".Create";
        public const string Update = Default + ".Update";
        public const string Delete = Default + ".Delete";
    }
}