using System.ComponentModel.DataAnnotations;

namespace API.DTOs;

public class RegisterDto
{
    [Required] public required string UserName { get; set; } = "";
    [Required] [EmailAddress] public required string Email { get; set; } = "";
    [Required] [MinLength(8)] public required string Password { get; set; } = "";
}