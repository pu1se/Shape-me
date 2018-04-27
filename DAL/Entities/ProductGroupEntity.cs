using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace DAL.Entities
{
    [Table("ProductGroups")]
    public class ProductGroupEntity : BaseEntity
    {
        [Key]
        public int ProductGroupId { get; set; }

        [Required]
        [MaxLength(250)]
        public string Name { get; set; }

        [Required]
        [MaxLength(50)]
        public string ProductType { get; set; } 

        public virtual List<ProductItemEntity> ProductList { get; set; }
    }
}
