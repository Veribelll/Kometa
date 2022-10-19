using Microsoft.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc;

namespace Smde.Controllers;

public class HomeController : AbpController
{
    public ActionResult Index()
    {
        return Redirect("~/graphql");
    }
}