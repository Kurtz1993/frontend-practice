using System;
using System.Collections.Generic;
using FrontendPractice.Models;
using Microsoft.AspNetCore.Mvc;

namespace FrontendPractice.Controllers
{
    [Route("/api/[controller]")]
    public class GamesController : Controller
    {
        public IEnumerable<Game> Get()
        {
            return new List<Game>() {
                new Game() { Id = new Guid(), Name = "Chess", Description = "A logic game for", MaximumPlayers = 2 },
                new Game() { Id = new Guid(), Name = "Monopoly", Description = "Get rich, biatch", MaximumPlayers = 8 }
            };
        }
    }
}