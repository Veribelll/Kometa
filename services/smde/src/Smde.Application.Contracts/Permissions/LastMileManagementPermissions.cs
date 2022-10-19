namespace Smde.Permissions;

public class LastMileManagementPermissions
{
    public const string GroupName = "LastMileManagement";

    public static class LastMiles
    {
        public const string Default = GroupName + ".LastMiles";
        public const string Create = Default + ".Create";
        public const string Update = Default + ".Update";
        public const string Delete = Default + ".Delete";
        public const string Activate = Default + ".Activate";
        public const string ManageSmsTemplate = Default + ".ManageSmsTemplate";
        public const string ManageStoragePeriod = Default + ".ManageStoragePeriod";
        public const string ManageReturnPeriod = Default + ".ManageReturnPeriod";
    }
    
    public static class AccessKeys
    {
        public const string Default = GroupName + ".AccessKeys";
        public const string Create = Default + ".Create";
        public const string Update = Default + ".Update";
        public const string Delete = Default + ".Delete";
    }

    public static class Postamats
    {
        public const string Default = GroupName + ".Postamats";
        public const string ManageSettings = Default + ".ManageSettings";
        public const string ManagePrinters = Default + ".ManagePrinters";
        public const string ManageControllers = Default + ".ManageControllers";
        public const string ManageCells = Default + ".ManageCells";
        public const string ManageTopology = Default + ".ManageTopology";
        public const string PutPackingPlace = Default + ".PutPackingPlace";
        public const string IssuePackingPlace = Default + ".IssuePackingPlace";
    }
}