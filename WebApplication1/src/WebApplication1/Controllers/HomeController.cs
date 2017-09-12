using System.Collections.Generic;
using System.Linq;
using helloReact.Models;
using Microsoft.AspNetCore.Mvc;

namespace helloReact.Controllers
{
    public class HomeController : Controller
    {
        private static readonly List<CommentModel> _comments = new List<CommentModel>();

        static HomeController()
        {
            _comments.Add(new CommentModel { Id = 1, Author = "Teacher", Text = "Keep on learning!" });
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Error()
        {
            return View();
        }

        public IActionResult Feedback()
        {
            return View();
        }

        [Route("comments")]
        [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
        public ActionResult Comments()
        {
            return Json(_comments);
        }

        [Route("comments/new")]
        [HttpPost]
        public ActionResult AddComment(CommentModel comment)
        {
            comment.Id = _comments.Select(c => c.Id).Max() + 1;
            _comments.Add(comment);
            return Content("Success :)");
        }
    }
}