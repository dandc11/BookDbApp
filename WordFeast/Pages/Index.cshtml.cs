using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using WordFeast.Models;

namespace WordFeast.Pages.Books
{
    public class IndexModel : PageModel
    {
        private readonly WordFeast.Models.BookContext _context;

        public IndexModel(WordFeast.Models.BookContext context)
        {
            _context = context;
        }

        public IList<Book> Book { get; set; }

        public async Task OnGetAsync(string searchString)
        {
            //LINQ statement
            var book = from m in _context.Book 
                       select m;

            if (!String.IsNullOrEmpty(searchString))
            {
                book = book.Where(s => s.Title.Contains(searchString));
            }

            Book = await book.ToListAsync();

        }
    }
}