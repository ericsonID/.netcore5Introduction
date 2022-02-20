using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ProEventos.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProEventos.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EventoController : ControllerBase
    {

        private readonly ILogger<EventoController> _logger;

        public EventoController(ILogger<EventoController> logger)
        {

        }
        public IEnumerable<Evento> _evento = new Evento[]
        {
            new Evento(){
                    EventoId = 1,
                    Tema = "Angular 11 e .NET 5",
                    Local = "SP",
                    Lote = "1º Lote",
                    QtdPessoas = 250,
                    DataEvento = DateTime.Now.AddDays(2).ToString("dd/MM/yyyy"),
                    ImagemURL = "foto.PNG"
            },
                new Evento(){
                    EventoId = 2,
                    Tema = "Angular 11 e .NET 5",
                    Local = "RJ",
                    Lote = "2º Lote",
                    QtdPessoas = 230,
                    DataEvento = DateTime.Now.AddDays(3).ToString("dd/MM/yyyy"),
                    ImagemURL = "foto.PNG"
            }
        };
        [HttpGet("{id}")]
        public IEnumerable<Evento> GetById(int id)
        {
            return _evento.Where(evento=>evento.EventoId == id);
        }
        [HttpPost]
        public string Post()
        {
            return "Exemplo post";
        }
        [HttpPut("{id}")]
        public string Put(int id)
        {
            return $"Exemplo put {id}";
        }
        [HttpDelete("{id}")]
        public string Delete(int id)
        {
            return $"Exemplo delete {id}";
        }
    }
}
