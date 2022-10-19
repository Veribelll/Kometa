using Volo.Abp.Threading;

namespace Smde;

public static class SmdeGlobalFeatureConfigurator
{
    private static readonly OneTimeRunner OneTimeRunner = new();

    public static void Configure()
    {
        OneTimeRunner.Run(() => { });
    }
}