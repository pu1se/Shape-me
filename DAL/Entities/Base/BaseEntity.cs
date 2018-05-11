using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace DAL
{
    public abstract class BaseEntity
    {
        [Required]
        public DateTime CreatedDate { get; set; }
        [Required]
        public DateTime LastChangedDate { get; set; }
        [Required]
        public int LastChangedByUserId { get; set; }

        protected BaseEntity()
        {
            CreatedDate = DateTime.UtcNow;
            LastChangedDate = DateTime.UtcNow;
        }
    }
}
