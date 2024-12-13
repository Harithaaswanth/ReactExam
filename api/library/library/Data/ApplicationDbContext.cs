using library.Model;
using Microsoft.EntityFrameworkCore;

namespace library.Data
{
    public class ApplicationDbContext:DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
        public DbSet<Author> authors { get; set; }
        public DbSet<Book> books { get; set; }
        public DbSet<Catogory> catogories { get; set; }
    }
}
