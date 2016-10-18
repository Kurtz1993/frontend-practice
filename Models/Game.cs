using System;
using System.ComponentModel.DataAnnotations;

namespace FrontendPractice.Models
{
    public class Game {
        [Key]
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int MaximumPlayers { get; set; }
    }
}