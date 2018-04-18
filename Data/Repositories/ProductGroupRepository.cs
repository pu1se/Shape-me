using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Text;
using DAL.Entities;

namespace DAL.Repositories
{
    public class ProductGroupRepository : BaseRepository<ProductGroupEntity>
    {
        public ProductGroupRepository(DbContext context) : base(context)
        {
        }
    }
}
