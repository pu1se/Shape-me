using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace DAL.Entities
{

    [Table("ProductItems")]
    public class ProductItemEntity : BaseEntity
    {
        [Key]
        public int ProductItemId { get; set; }

        public virtual ProductGroupEntity ProductGroup { get; set; }

        [Required]
        [MaxLength(250)]
        public string Name { get; set; }

        [Required]
        [MaxLength(250)]
        public string ImageUrl { get; set; }

        public double? Price { get; set; }

        public bool IsBest { get; set; }
    }
}
