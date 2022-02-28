using BookStoreOnl.Entities;
using Microsoft.EntityFrameworkCore;

namespace BookStoreOnl.Data
{
    public class StoreContext : DbContext
    {
        public StoreContext(DbContextOptions<StoreContext> options) : base(options)
        {

        }
        //public DbSet<Category> Category { get; set; }
        public DbSet<Product> Products { get; set; }
    }

}
