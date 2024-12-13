using library.Data;
using library.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace library.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LibraryController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public LibraryController(ApplicationDbContext context)
        {
            _context = context;
        }
 // author

        [HttpPost("Author")]
        public async Task<ActionResult<Author>> Author(Author author)
        {
            if (_context.authors.Any(u => u.Id == author.Id))
            {
                return BadRequest(" already exists.");
            }
            var athor = new Author
            {
                Name = author.Name,
                Bio = author.Bio,

                

            };
            _context.authors.Add(athor);
            _context.SaveChanges();
            return Ok("Successfully Added");
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Author>>> GetAuthor()
        {
            return await _context.authors.ToListAsync();
        }
        //book
        [HttpPost("addbook")]
        public async Task<ActionResult<Book>> book(Book book)
        {
            if (_context.authors.Any(u => u.Id == book.Id))
            {
                return BadRequest(" already exists.");
            }
            var bok = new Book
            {
                Name = book.Name,
                discription = book.discription,



            };
            _context.books.Add(bok);
            _context.SaveChanges();
            return Ok("Successfully Added");
        }


        [HttpGet("book")]
        public async Task<ActionResult<IEnumerable<Book>>> GetBook()
        {
            return await _context.books.ToListAsync();
        }


        // catogory

        [HttpPost("catogory")]
        public async Task<ActionResult<Catogory>> book(Catogory catogory)
        {
            if (_context.authors.Any(u => u.Id == catogory.Id))
            {
                return BadRequest(" already exists.");
            }
            var cate = new Catogory
            {
                title = catogory.title,
                discription = catogory.discription,
                publicationyear = catogory.publicationyear,
                Authorid = catogory.Authorid,
                catogoryid = catogory.catogoryid



            };
            _context.catogories.Add(cate);
            _context.SaveChanges();
            return Ok("Successfully Added");
        }


        [HttpGet("catogorylist")]
        public async Task<ActionResult<IEnumerable<Catogory>>> Getcategory()
        {
            return await _context.catogories.ToListAsync();
        }
    }
}
