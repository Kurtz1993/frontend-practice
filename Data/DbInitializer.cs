using System.Collections.Generic;
using System.Linq;
using FrontendPractice.Models;

namespace FrontendPractice.Data
{
    public class DbInitializer
    {
        private PracticeContext _context;
        public DbInitializer (PracticeContext context)
        {
            _context = context;
        }
        /// <summary>
        /// Initializes the database with test data.
        /// </summary>
        public void Initialize()
        {
            if (_context.Games.Any())
            {
                return;
            }

            var games = new List<Game> {
                new Game {Name="Chess", Description = "A logic game for humans", MaximumPlayers = 2},
                new Game {Name = "Monopoly", Description = "Get rich real quick!", MaximumPlayers = 8}
            };

            _context.Games.AddRange(games);

            _context.SaveChanges();
        }
    }
}