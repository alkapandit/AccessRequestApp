using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using AccessRequestApp.Models;

namespace AccessRequestApp.Data
{
    public class AccessRequestAppContext : DbContext
    {
        public AccessRequestAppContext (DbContextOptions<AccessRequestAppContext> options)
            : base(options)
        {
        }

        public DbSet<AccessRequestApp.Models.Requests> Requests { get; set; } = default!;
    }
}
