using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Text;
using DAL.Entities;

namespace DAL.Repositories
{
    public class UserRepository : BaseRepository<UserEntity>
    {
        public UserRepository(DbContext context) : base(context)
        {
        }
    }
}
