using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Net.Http;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using System.Web.Http.ModelBinding;
using DAL;
using DAL.Entities;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.Cookies;
using Microsoft.Owin.Security.OAuth;
using ServicesApi.Models;

namespace ServicesApi.Controllers
{
    [Authorize]
    [RoutePrefix("api/Account")]
    public class AccountController : BaseController
    {

        [HttpPost]
        [Route("Logout")]
        public IHttpActionResult Logout()
        {
            Request.GetOwinContext().Authentication.SignOut(CookieAuthenticationDefaults.AuthenticationType);
            return Ok();
        }


        [HttpPost]
        [Route("changeUserInfo")]
        public IHttpActionResult ChangeAccountInfo([FromBody]ChangeUserInfoViewModel model)
        {
            if (!ModelState.IsValid)
            {
                throw new Exception(ConvertToErrorMessage(ModelState));
            }

            var currentUser = Storage.Users.GetById(CurrentUser.UserId);
            if (currentUser.PasswordHash != PasswordUtil.GetHash(model.OldPassword))
            {
                throw new Exception("Старый пароль не верный");
            }



            currentUser.Email = model.Email;
            currentUser.Name = model.Email.Split('@')[0];
            currentUser.PasswordHash = PasswordUtil.GetHash(model.NewPassword);

            Storage.Users.Save(currentUser);

            return Ok();
        }

        private static string ConvertToErrorMessage(ModelStateDictionary modelState)
        {
            var errorMessages = modelState.SelectMany(m => m.Value.Errors, (m, e) => e.ErrorMessage);
            var exeptions = modelState.SelectMany(m => m.Value.Errors, (m, e) => e.Exception);
            var validationDetailMessage = new StringBuilder();

            foreach (string errorMessage in errorMessages)
            {
                if (errorMessage.IsNullOrEmpty() == false)
                    validationDetailMessage.AppendLine(errorMessage);
            }
            foreach (var item in exeptions)
            {
                if (item != null)
                    validationDetailMessage.AppendLine(item.Message);
            }
            return validationDetailMessage.ToString();
        }
    }
}
