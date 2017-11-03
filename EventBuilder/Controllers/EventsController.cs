namespace EventBuilder.Controllers
{
    using Microsoft.AspNetCore.Mvc;
    using System.Collections.Generic;

    [Route("events")]
    public class EventsController : Controller
    {
        private readonly Dictionary<int, string> _templates;

        public EventsController()
        {
            _templates = new Dictionary<int, string>();
            _templates.Add(1, "BigOcean");
            _templates.Add(2, "AliceLonely");
        }

        [HttpGet("{id}")]
        public IActionResult Index(int id)
        {
            if (_templates.ContainsKey(id))
            {
                return View($"Templates/{_templates[id]}/Index.cshtml");
            }
            return View();
        }
    }
}