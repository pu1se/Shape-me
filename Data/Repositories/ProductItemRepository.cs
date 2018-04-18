using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Text;
using DAL.Entities;

namespace DAL.Repositories
{
    public class ProductItemRepository : BaseRepository<ProductItemEntity>
    {
        public ProductItemRepository(DbContext context) : base(context)
        {
        }
    }
}
