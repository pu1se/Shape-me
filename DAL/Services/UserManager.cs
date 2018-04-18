using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Web.SessionState;
using DAL.Entities;

namespace DAL
{
    public class UserManager : IDisposable
    {
        private static HttpSessionState Session => HttpContext.Current.Session;

        public virtual UserEntity CurrentUser => Session["CurrentUser"] as UserEntity;

        public UserEntity GetUser(string email, string password)
        {
            if (email.IsNullOrEmpty() || password.IsNullOrEmpty())
                return null;

            using (var storage = new Storage())
            {
                var hashedPassword = PasswordUtil.GetHash(password);
                var user = storage.Users.Get(x => x.Email == email && x.PasswordHash == hashedPassword);
                return user;
            }
        }

        public void ChangePassword(long currentUserId, string oldPassword, string newPassword)
        {
        }

        public void RecoverPassword(string userEmail)
        {            
        }

        public void Dispose()
        {
        }
    }
}
