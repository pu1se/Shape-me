using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using DAL;
using NLog;

namespace ServicesApi
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
        }

        private static Logger logger = LogManager.GetCurrentClassLogger();
        protected void Application_Error(object sender, EventArgs e)
        {
            var exception = Server.GetLastError();

            if (exception.InnerException != null)
            {
                exception = exception.InnerException;
            }

            else if (exception is SqlException)
            {
                BoxErrorMessage(500, exception, $"Database exception: {exception.Message}");
            }
            else
            {
                BoxErrorMessage(500, exception, exception.Message);
            }
        }

        private void BoxErrorMessage(int statusCode, Exception exception, string message)
        {
            if (statusCode != 400)
            {
                var logMessage = "[Error] - Message: " + (exception != null ? exception.Message + ";" + Environment.NewLine + "Stack Trace: " + exception.StackTrace : "Unknown error!");
                logger.Error(logMessage);
            }

            Response.TrySkipIisCustomErrors = true;
            Server.ClearError();
            Response.ClearContent();
            Response.StatusCode = statusCode;

            message = message.ToHtmlString();

            Response.Write(message);
            Response.End();
        }
    }
}
