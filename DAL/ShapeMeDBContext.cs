using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Text;
using DAL.Entities;

namespace DAL
{
    public class ShapeMeDBContext : DbContext
    {
        public virtual DbSet<ProductItemEntity> ProductItems { get; set; }
        public virtual DbSet<ProductGroupEntity> ProductGroups { get; set; }
        public virtual DbSet<UserEntity> Users { get; set; }

        public ShapeMeDBContext() : base("DefaultConnection")
        {
            var objectContext = ((IObjectContextAdapter)this).ObjectContext;
            objectContext.SavingChanges += (sender, args) =>
            {
                var now = DateTime.Now;
                var userManager = new UserManager();
                foreach (var entry in ChangeTracker.Entries<BaseEntity>())
                {
                    var entity = entry.Entity;
                    switch (entry.State)
                    {
                        case EntityState.Added:
                            entity.CreatedDate = now;
                            entity.LastChangedDate = now;
//                            entity.LastChangedByUserId = userManager.CurrentUser?.UserId;
                            break;
                        case EntityState.Modified:
                            entity.LastChangedDate = now;
//                            entity.LastChangedByUserId = userManager.CurrentUser?.UserId;
                            break;
                    }
                }
            };
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<OneToManyCascadeDeleteConvention>();
            modelBuilder.Ignore(new[] { typeof(BaseEntity) });

            modelBuilder.Entity<ProductGroupEntity>()
                .HasMany(x=>x.ProductList)
                .WithRequired(x=>x.ProductGroup)
                .WillCascadeOnDelete(true);            

            base.OnModelCreating(modelBuilder);
        }        
    }
}
