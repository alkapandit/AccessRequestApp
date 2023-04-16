using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace AccessRequestApp.Models
{
    public class UserRequest
    {
       

        public int RequestId { get; set; }
        public string UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Purpose { get; set; }
        public string ApplicationName { get; set; }
        public DateTime RequestDate { get; set; }
    }
}
