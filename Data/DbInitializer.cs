using System.Collections.Generic;
using System.Linq;
using FrontendPractice.Models;

namespace FrontendPractice.Data
{
    public static class DbInitializer
    {
        /// <summary>
        /// Initializes the database with test data.
        /// </summary>
        /// <param name="context">Application's DbContext.</param>
        public static void Initialize(PracticeContext context)
        {
            if (context.Games.Any())
            {
                return;
            }

            var games = new List<Game> {
                new Game {Name="Chess", Description = "A logic game for humans", MaximumPlayers = 2},
                new Game {Name = "Monopoly", Description = "Get rich real quick!", MaximumPlayers = 8}
            };

            context.Games.AddRange(games);

            context.SaveChanges();
        }
    }
}