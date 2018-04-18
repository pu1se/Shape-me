using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Runtime.CompilerServices;
using System.Text;

namespace DAL.Entities
{
    [Table("Users")]
    public class UserEntity : BaseEntity
    {
        [Key]
        public int UserId { get; set; }

        [Required]
        [MaxLength(250)]

        public string Email { get; set; }

        [Required]
        [MaxLength(250)]
        public string PasswordHash { get; set; }
    }
}
