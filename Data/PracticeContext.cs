using FrontendPractice.Models;
using Microsoft.EntityFrameworkCore;

namespace FrontendPractice.Data
{
    public class PracticeContext : DbContext
    {
        public PracticeContext(DbContextOptions<PracticeContext> options) : base(options)
        {
        }

        public DbSet<Game> Games;

        protected override void OnModelCreating(ModelBuilder modelbuilder)
        {
            modelbuilder.Entity<Game>().ToTable("Games");
        }
    }
}