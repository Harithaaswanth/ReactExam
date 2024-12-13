using System.ComponentModel.DataAnnotations;

namespace library.Model
{
    public class Author
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Bio { get; set; }

       
    }
}
