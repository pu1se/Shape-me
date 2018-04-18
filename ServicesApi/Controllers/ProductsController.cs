using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DAL.Entities;

namespace ServicesApi.Controllers
{
    public class ProductsController : BaseController
    {
        // GET api/values
        public IEnumerable<ProductGroupEntity> Get()
        {
            var result = Storage.ProductGroups.GetAll();
            return result;
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
