using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DAL.Entities;

namespace ServicesApi.Controllers
{
    [Authorize]
    public class ProductsController : BaseController
    {
        public IEnumerable<ProductGroupEntity> Get()
        {
            var result = Storage.ProductGroups.GetAll();
            return result;
        }

        public ProductGroupEntity Get(int id)
        {
            return Storage.ProductGroups.GetById(id);
        }

        [Route("Add")]
        public IHttpActionResult Add(int id, [FromBody]ProductGroupEntity value)
        {
            Storage.ProductGroups.Save(value);
            return Ok();
        }

        [Route("Edit")]
        public IHttpActionResult Edit([FromBody]ProductGroupEntity value)
        {
            Storage.ProductGroups.Save(value);
            return Ok();
        }

        [Route("Delete")]
        public IHttpActionResult Delete(int id)
        {
            Storage.ProductGroups.Delete(id);
            return Ok();
        }
    }
}
