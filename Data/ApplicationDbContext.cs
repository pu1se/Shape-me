using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Text;
using DAL.Entities;

namespace DAL
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<UserEntity> Orders { get; set; }
        public DbSet<ProductGroupEntity> Products { get; set; }
        public DbSet<ProductItemEntity> Users { get; set; }

        public ApplicationDbContext() : base("DefaultConnection")
        {
            var objectContext = ((IObjectContextAdapter)this).ObjectContext;
            objectContext.SavingChanges += (sender, args) =>
            {
                var now = DateTime.Now;
                foreach (var entry in ChangeTracker.Entries<BaseEntity>())
                {
                    var entity = entry.Entity;
                    switch (entry.State)
                    {
                        case EntityState.Added:
                            entity.CreatedDate = now;
                            entity.LastUpdatedDate = now;
                            break;
                        case EntityState.Modified:
                            entity.LastUpdatedDate = now;
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
