using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using DAL;
using DAL.Entities;

namespace ServicesApi
{
    public abstract class BaseController : ApiController
    {
        private UserManager userManager = new UserManager();
        private UserEntity _currentUser;
        protected UserEntity CurrentUser => userManager.CurrentUser;

        protected Storage Storage = new Storage();

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