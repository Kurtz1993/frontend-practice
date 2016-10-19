using FrontendPractice.Models;
using Microsoft.EntityFrameworkCore;

namespace FrontendPractice.Data
{
    public class PracticeContext : DbContext
    {
        public DbSet<Game> Games { get; set; }

        public PracticeContext(DbContextOptions<PracticeContext> options) : base(options)
        {
            Database.Migrate();

            Database.EnsureCreated();
        }

        protected override void OnModelCreating(ModelBuilder modelbuilder)
        {
            modelbuilder.Entity<Game>().ToTable("Games");
        }
    }
}