using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace DAL.Entities
{
    public enum ProductType
    {
        sculpture,
        fountain,
        tile,
        souvenir,
        flowerpot,
        gallery
    }

    [Table("ProductGroups")]
    public class ProductGroupEntity : BaseEntity
    {
        [Key]
        public int ProductGroupId { get; set; }

        [Required]
        [MaxLength(250)]
        public string Name { get; set; }

        [Required]
        public ProductType ProductType { get; set; } 

        public virtual List<ProductItemEntity> ProductList { get; set; }
    }
}
