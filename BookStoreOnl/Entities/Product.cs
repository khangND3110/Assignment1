using System.ComponentModel.DataAnnotations;

namespace BookStoreOnl.Entities
{
    public class Product
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public long Price { get; set; }
        public string PictureUrl { get; set; }
        public string Type { get; set; }
        public string Author { get; set; }
        public int QuantityInStock { get; set; }
        public int Rating { get; set; }
        public string PublicId { get; set; }
    }
}
