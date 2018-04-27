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

        internal UserEntity CurrentUser => UserManager.CurrentUser;

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