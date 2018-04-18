using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Web.SessionState;
using DAL.Entities;

namespace DAL
{
    public class UserManager
    {
        private static HttpSessionState Session => HttpContext.Current.Session;

        public virtual UserEntity CurrentUser => Session["CurrentUser"] as UserEntity;
    }
}
