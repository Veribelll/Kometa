namespace Smde.Permissions;

public class PackingPlaceManagementPermissions
{
    public const string GroupName = "PackingPlaceManagement";

    public static class PackingPlaces
    {
        public const string Default = GroupName + ".PackingPlaces";
        public const string Create = Default + ".Create";
        public const string Update = Default + ".Update";
        public const string Delete = Default + ".Delete";
        public const string Send = Default + ".Send";
    }

    public static class ShipmentRequests
    {
        public const string Default = GroupName + ".ShipmentRequests";
        public const string Create = Default + ".Create";
        public const string Update = Default + ".Update";
        public const string Delete = Default + ".Delete";
        public const string Cancel = Default + ".Cancel";
    }

    public static class ReturnRequests
    {
        public const string Default = GroupName + ".ReturnRequests";
        public const string Create = Default + ".Create";
        public const string Update = Default + ".Update";
        public const string Delete = Default + ".Delete";
        public const string Cancel = Default + ".Cancel";
        public const string Return = Default + ".Return";
    }
}