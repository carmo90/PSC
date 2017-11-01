using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PSC.Models;
using PSC.ViewModels;
using Microsoft.EntityFrameworkCore;

//Creaiamo un metodo asincrono per fornire un meccanismo per scrivere il codice in maniera non bloccante
namespace PSC.Controllers
{
    [Produces("application/json")]
    [Route("api/Student")]
    public class StudentController : Controller
    {
        private readonly UniversityContext _context;

        public StudentController(UniversityContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<IActionResult> StudentList()
        {
            List<Student_Course> ilIst = new List<Student_Course>(); //Creiamo una lista di Studente_Corso
            var listData = await (from emp in _context.Student
                                  join pro in _context.Course on emp.CorsoId equals pro.CorsoId
                                  select new
                                  {
                                      emp.StudenteId,
                                      emp.Nome,
                                      emp.Cognome,
             //                         emp.AnnoIscrizione,
                                      emp.Matricola,
                                      pro.Titolo

                                  }
                          ).ToListAsync();
            listData.ForEach(x =>
            {
                Student_Course Obj = new Student_Course();
                Obj.StudenteId = x.StudenteId;
                Obj.Nome = x.Nome;
                Obj.Cognome = x.Cognome;
                Obj.Matricola = x.Matricola;
            //    Obj.AnnoIscrizione = x.AnnoIscrizione;
                Obj.Course = x.Titolo;
                ilIst.Add(Obj);
            });

            return Json(ilIst);
        }

        [HttpPost]
        public IActionResult AddStudent([FromBody]Student empObj)
        {
            _context.Student.Add(empObj);
            _context.SaveChanges();
            return Json("OK");


        }
    }
}