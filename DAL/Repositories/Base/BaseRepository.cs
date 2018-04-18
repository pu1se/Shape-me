using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using DAL.Entities;

namespace DAL
{
    public abstract class BaseRepository<TEntity> where TEntity : BaseEntity
    {
        protected readonly DbContext Context;
        protected DbSet<TEntity> DbSet;

        public BaseRepository(DbContext context)
        {
            Context = context;
            DbSet = Context.Set<TEntity>();
        }

        public virtual void Save(TEntity entity)
        {
            DbSet.AddOrUpdate(entity);
            Context.SaveChanges();
        }

        public virtual void Delete(int id)
        {
            var entity = DbSet.Find(id);
            Delete(entity);
        }

        public virtual void Delete(TEntity deletedEntity)
        {
            DbSet.Remove(deletedEntity);
            Context.SaveChanges();
        }

        public virtual TEntity GetById(int id)
        {
            var result = DbSet.Find(id);
            return result;
        }

        public virtual TEntity Get(Expression<Func<TEntity, bool>> expression)
        {
            var result = DbSet.FirstOrDefault(expression);
            return result;
        }

        public virtual List<TEntity> GetList(Expression<Func<TEntity, bool>> expression, Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null)
        {
            var query = DbSet.Where(expression);
            return orderBy != null ? orderBy(query).ToList() : query.ToList();
        }

        public virtual List<TEntity> GetAll()
        {
            return DbSet.ToList();
        }


    }
}
