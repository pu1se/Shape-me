using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Security.Claims;
using System.Web;
using System.Web.Http;
using DAL;
using DAL.Entities;
using Microsoft.Owin.Security;

namespace ServicesApi
{
    public abstract class BaseController : ApiController
    {
        protected UserManager UserManager = new UserManager();
        protected Storage Storage = new Storage();

        protected IAuthenticationManager Authentication => Request.GetOwinContext().Authentication;

        private UserEntity _currentUser;
        internal UserEntity CurrentUser
        {
            get
            {
                if (Authentication.User.Identity.IsAuthenticated)
                {
                    if (_currentUser == null)
                    {
                        _currentUser = GetCurrentUserFromContext();
                    }
                }
                else
                {
                    _currentUser = null;
                }
                return _currentUser;
            }
        }

        private UserEntity GetCurrentUserFromContext()
        {
            var userId = int.Parse(Authentication.User.Claims.First(x => x.Type == ClaimTypes.NameIdentifier).Value);
            var email = Authentication.User.Claims.First(x => x.Type == ClaimTypes.Email).Value;
            var name = Authentication.User.Claims.First(x => x.Type == ClaimTypes.Name).Value;

            var user = new UserEntity
            {
                UserId = userId,
                Email = email,
                Name = name
            };

            return user;
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                Storage.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}