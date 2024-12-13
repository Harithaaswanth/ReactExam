using System.ComponentModel.DataAnnotations;

namespace library.Model
{
    public class Book
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string discription { get; set; }
    }
}
