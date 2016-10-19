using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using FrontendPractice.Data;

namespace frontendpractice.Migrations
{
    [DbContext(typeof(PracticeContext))]
    [Migration("20161019050845_InitialGameDatabase")]
    partial class InitialGameDatabase
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.0.1")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("FrontendPractice.Models.Game", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Description");

                    b.Property<int>("MaximumPlayers");

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("Games");
                });
        }
    }
}
