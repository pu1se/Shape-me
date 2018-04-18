using System;
using System.Collections.Generic;
using System.Text;
using DAL.Repositories;

namespace DAL
{
    public class Storage : IDisposable
    {
        private readonly ShapeMeDBContext context = new ShapeMeDBContext();

        private ProductGroupRepository productGroupRepository;
        public ProductGroupRepository ProductGroups => productGroupRepository ?? (productGroupRepository = new ProductGroupRepository(context));

        private ProductItemRepository productItemRepository;
        public ProductItemRepository ProductItems => productItemRepository ?? (productItemRepository = new ProductItemRepository(context));

        private UserRepository userRepository;
        public UserRepository Users => userRepository ?? (userRepository = new UserRepository(context));

        private bool isDisposed;
        public void Dispose()
        {
            if (isDisposed)
                return;

            isDisposed = true;
            context.SaveChanges();
            context.Dispose();
        }
    }
}
