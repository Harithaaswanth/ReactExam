using System.ComponentModel.DataAnnotations;

namespace library.Model
{
    public class Catogory
    {
        [Key]
        public int Id { get; set; }
        public string title { get; set; }
        public string discription { get; set; }
        public int publicationyear { get; set; }
        public int Authorid { get; set; }
        public int catogoryid { get; set; }
    }
}
