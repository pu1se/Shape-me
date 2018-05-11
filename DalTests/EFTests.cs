using System;
using System.Collections.Generic;
using System.Linq;
using DAL;
using DAL.Entities;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DalTests
{
    [TestClass]
    public class EFTests
    {
        UserEntity GetDefaultUser(Storage storage)
        {
            return storage.Users.GetAll().First();
        }

        [TestMethod]
        public void TestUserCreation()
        {
            using (var storage = new Storage())
            {
                var adminEmail = "pavel_pontus@tut.by";
                if (storage.Users.Get(x => x.Email == adminEmail) != null)
                {
                    return;
                }

                var user = new UserEntity
                {
                    Email = adminEmail,
                    Name = "Павел П",
                    PasswordHash = PasswordUtil.GetHash("password"),
                    LastChangedByUserId = 1
                };

                storage.Users.Save(user);

                var newUser = storage.Users.Get(x => x.Email == adminEmail);
                Assert.IsTrue(newUser != null);
                Assert.IsTrue(newUser.UserId > 0);
            }
        }

        [TestMethod]
        public void TestTileProductCreation()
        {
            using (var storage = new Storage())
            {
                if (storage.ProductGroups.Get(x => x.ProductType == "tile") != null)
                {
                    return;
                }

                var tileProduct = new ProductGroupEntity
                {
                    Name = "Плитка",
                    ProductType = "tile",
                    LastChangedByUserId = GetDefaultUser(storage).UserId,
                    ProductList = new List<ProductItemEntity>
                    {
                        new ProductItemEntity
                        {
                          Name  = "Mankhetten 1",
                          ImageUrl = "/assets/images/tile/Mankhetten1.jpg",
                          Price = 20,
                          LastChangedByUserId = GetDefaultUser(storage).UserId,
                          IsBest = true,
                        },

                        new ProductItemEntity
                        {
                            Name  = "Mankhetten 6",
                            ImageUrl = "/assets/images/tile/Mankhetten6.jpg",
                            LastChangedByUserId = GetDefaultUser(storage).UserId,
                        },
                    }
                };

                storage.ProductGroups.Save(tileProduct);

                var newProductGroup = storage.ProductGroups.Get(x => x.ProductType == "tile");
                Assert.IsTrue(newProductGroup != null);
                Assert.IsTrue(newProductGroup.ProductGroupId > 0);
                Assert.IsTrue(newProductGroup.ProductList != null);
                Assert.IsTrue(newProductGroup.ProductList.Count == tileProduct.ProductList.Count);
            }
        }
    }
}
