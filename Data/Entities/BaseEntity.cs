using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace DAL.Entities
{
    public abstract class BaseEntity
    {
        [Required]
        public DateTime CreatedDate { get; set; }
        [Required]
        public DateTime LastUpdatedDate { get; set; }

        protected BaseEntity()
        {
            CreatedDate = DateTime.UtcNow;
            LastUpdatedDate = DateTime.UtcNow;
        }
    }
}
