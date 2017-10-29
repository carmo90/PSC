using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PSC.Models;
using Microsoft.EntityFrameworkCore;

namespace PSC.Controllers
{
    [Produces("application/json")]
    [Route("api/Course")]
    public class CourseController : Controller
    {
        private readonly UniversityContext _context;

        public CourseController(UniversityContext context)
        {
            _context = context;
        }
        // GET: api/Course  
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            List<Course> course_ = new List<Course>();
            var Course = await (from data in _context.Course
                                 select new
                                 {
                                     CorsoId = data.CorsoId,
                                     Titolo = data.Titolo
                                 }).ToListAsync();
            Course.ForEach(x =>
            {
                Course pro = new Course();
                pro.CorsoId = x.CorsoId;
                pro.Titolo = x.Titolo;
                course_.Add(pro);
            });


            return Json(course_);
        }



    }
}