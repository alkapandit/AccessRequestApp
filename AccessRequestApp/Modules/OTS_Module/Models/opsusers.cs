using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AccessRequestApp.Models
{
    public class opsusers
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]

        public string? Username { get; set; }
        public string? Station { get; set; }
        public string? Superuser { get; set; }
        public string? Firstname { get; set; }
        public string? Lastname { get; set; }
        public string? Phone { get; set; }
        public short? Gs_User { get; set; }
        public string? Airline { get; set; }
        public short? Lm_User { get; set; }
        public short? Security { get; set; }
        public string? Pword { get; set; }
        public short? Global_User { get; set; }
        public short? Flags { get; set; }
        public short? Stats_User { get; set; }
        public short? Iceops_User { get; set; }
        public short? Ots_User { get; set; }
    }
}
