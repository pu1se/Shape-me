using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Web.SessionState;
using DAL.Entities;

namespace DAL
{
    public class UserManager : IDisposable
    {
        private UserEntity _currentUser;
        public virtual UserEntity CurrentUser
        {
            get
            {
                if (_currentUser == null)
                {
                    var userIdentity = HttpContext.Current?.User?.Identity as ClaimsIdentity;
                    if (userIdentity == null)
                        return null;

                    var userId = int.Parse(userIdentity.Claims.First(x => x.Type == ClaimTypes.NameIdentifier).Value);
                    var email = userIdentity.Claims.First(x => x.Type == ClaimTypes.Email).Value;
                    var name = userIdentity.Claims.First(x => x.Type == ClaimTypes.Name).Value;

                    _currentUser = new UserEntity
                    {
                        UserId = userId,
                        Email = email,
                        Name = name
                    };
                }
                return _currentUser;
            }
        }

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

        public void Dispose()
        {
        }
    }
}
