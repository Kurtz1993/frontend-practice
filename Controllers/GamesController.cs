using System;
using System.Collections.Generic;
using System.Linq;
using FrontendPractice.Data;
using FrontendPractice.Models;
using Microsoft.AspNetCore.Mvc;

namespace FrontendPractice.Controllers
{
    [Route("/api/[controller]")]
    public class GamesController : Controller
    {
        private PracticeContext _context;

        public GamesController(PracticeContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Game> Get()
        {
            return _context.Games.ToList();
        }

        [HttpGet("get/{id}")]
        public Game GetGame(string id)
        {
            var game = _context.Games.FirstOrDefault(g => g.Id == Guid.Parse(id));
            return game;
        }

        [HttpPost]
        public IActionResult Post([FromBody] Game game)
        {
            _context.Games.Add(game);
            _context.SaveChanges();
            return Created("", game);
        }

        [HttpPut]
        public IActionResult PutGame([FromBody] Game game)
        {
            _context.Games.Update(game);
            _context.SaveChanges();
            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteGame(string id)
        {
            var game = _context.Games.FirstOrDefault(g => g.Id == Guid.Parse(id));
            _context.Games.Remove(game);
            _context.SaveChanges();
            return Ok();
        }
    }
}