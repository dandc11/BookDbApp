using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WordFeast.Models
{
    public class Book
    {
        public int ID { get; set; }
        public string Title { get; set; }

        [Display(Name = "Author's First Name")]
        public string AuthorFirstName { get; set; }

        [Display(Name = "Author's Last Name")]
        public string AuthorLastName { get; set; }

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy - MM - dd}", ApplyFormatInEditMode = true)]
        [Display(Name = "Date Read")]
        public DateTime DateRead { get; set; }

        [Display(Name = "ISBN")]
        public string Isbn { get; set; }
    }
}
