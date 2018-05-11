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
        [AllowAnonymous]
        [HttpGet]
        public IEnumerable<ProductGroupEntity> Get()
        {
            var result = Storage.ProductGroups.GetAll();
            return result;
        }

        [Route("Add")]
        [HttpPost]
        public IHttpActionResult Add(int id, [FromBody]ProductGroupEntity value)
        {
            Storage.ProductGroups.Save(value);
            return Ok();
        }

        [Route("Edit")]
        [HttpPost]
        public IHttpActionResult Edit([FromBody]ProductGroupEntity value)
        {
            Storage.ProductGroups.Save(value);
            return Ok();
        }

        [Route("Delete")]
        [HttpPost]
        public IHttpActionResult Delete(int id)
        {
            Storage.ProductGroups.Delete(id);
            return Ok();
        }
    }
}
