using Microsoft.AspNetCore.Mvc.ApplicationModels;
using Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations;

namespace Kometa.AspNetCore.Mvc;

public class AbpApplicationConfigurationControllerConvention : IControllerModelConvention
{
    public void Apply(ControllerModel controller)
    {
        if (controller.ControllerType != typeof(AbpApplicationConfigurationController)) return;

        var selector = controller.Selectors.First();
        selector.AttributeRouteModel ??= new AttributeRouteModel();
        selector.AttributeRouteModel.Template = "/api/abp/application-configuration-default";
    }
}