using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace AccessRequestApp.Models
{
    public class Requests
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]

        public int RequestId { get; set; }
        public string? UserName { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Purpose { get; set; }
        public string? ApplicationName { get; set; }
        public DateTime? RequestDate { get; set; }
        public string? Status { get; set; }
        public string? ApprovedBy { get; set; }
        public string? Action { get; set; }
        public DateTime? ApprovedDate { get; set; }
    }
}
