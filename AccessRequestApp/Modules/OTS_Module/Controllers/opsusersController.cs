using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AccessRequestApp.Data;
using AccessRequestApp.Models;
using AccessRequestApp.DTOs;

namespace AccessRequestApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class opsusersController : ControllerBase
    {
        private readonly AccessRequestAppContext _context;

        public opsusersController(AccessRequestAppContext context)
        {
            _context = context;
        }

        // GET: api/opsusers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<opsusers>>> GetAllopsusers()
        {
          if (_context.opsusers == null)
          {
              return NotFound(new { Status = "fail", Message = "Data does not exists" });
            }
            return await _context.opsusers.ToListAsync();
        }

        // GET: api/opsusers/5
        [HttpGet("{username}")]
        public async Task<ActionResult<opsusers>> Getopsusers(string username)
        {
          if (_context.opsusers == null)
          {
              return NotFound();
          }
            var opsusers = await _context.opsusers.FindAsync(username);

            if (opsusers == null)
            {
                return NotFound(new { Status = "fail", Message = "User does not exists" });
            }

            return opsusers;
        }

        // PUT: api/opsusers/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{username}")]
        public async Task<ActionResult<UpdateUser>> Putopsusers(string username, UpdateUser opsusers)
        {
            var users = _context.opsusers.Where(d => d.Username == username).FirstOrDefault();
            if (users == null)
            {
                return BadRequest(new { Status = "fail", Message = "User does not exists" });
            }
          
            try
            {
                users.Station = opsusers.Station;
                users.Airline = opsusers.Airline;
                users.Superuser = opsusers.Superuser;
                users.Stats_User = opsusers.Stats_User;
                users.Iceops_User = opsusers.Iceops_User;
                users.Gs_User = opsusers.Gs_User;
                users.Global_User = opsusers.Global_User;
                users.Lm_User = opsusers.Lm_User;
                users.Ots_User = opsusers.Ots_User;
                users.Firstname = opsusers.Firstname;
                users.Lastname = opsusers.Lastname;
                users.Security = opsusers.Security;
                users.Flags = opsusers.Flags;
               // users.Phone = opsusers.Phone;

                await _context.SaveChangesAsync();
                return Ok(new UserResponseModel { Status = "success", Message = "Details updated successfully" });

            }
            catch (DbUpdateException)
            {
                return BadRequest(new UserResponseModel { Status = "fail", Message = "Something went wrong! Please try again." });

            }

        }

        // POST: api/opsusers
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<InsertUser>> Postopsusers(InsertUser user)
        {
            var username = _context.opsusers.Where(d => d.Username == user.UserName).FirstOrDefault();
            if (username != null)
            {
                return BadRequest(new UserResponseModel { Status = "fail", Message = "User already present!" });
            }
            if (user.Station.Length > 3)
            {
                return BadRequest(new UserResponseModel { Status = "fail", Message = "Maximum length exceed of Station!" });
            }
            try
            {
                _context.opsusers.Add(new opsusers
                {
                    Username = user.UserName,
                    Station = user.Station,
                    Superuser = user.Superuser,
                    Airline = user.Airline,
                    Firstname = user.Firstname,
                    Lastname = user.Lastname,
                    Gs_User = user.Gs_User,
                    Lm_User = user.Lm_User,
                    Global_User = user.Global_User,
                    Flags = user.Flags,
                    Iceops_User = user.Iceops_User,
                    Ots_User = user.Ots_User,
                });

                await _context.SaveChangesAsync();
                return Ok(new UserResponseModel { Status = "success", Message = "User details added successfully!" });

            }
            catch (DbUpdateConcurrencyException)
            {
                return BadRequest(new UserResponseModel { Status = "fail", Message = "Something went wrong! Please try again later" });

            }
        
           /*return CreatedAtAction("Getopsusers", new { id = user.UserName }, user);*/
        }

        // DELETE: api/opsusers/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Deleteopsusers(string id)
        {
            if (_context.opsusers == null)
            {
                return NotFound();
            }
            var opsusers = await _context.opsusers.FindAsync(id);
            if (opsusers == null)
            {
                return NotFound();
            }

            _context.opsusers.Remove(opsusers);
            await _context.SaveChangesAsync();

            return NoContent();
        }

    }

    internal class UserResponseModel
    {
        public string Status { get; set; }
        public string Message { get; set; }
    }
}
