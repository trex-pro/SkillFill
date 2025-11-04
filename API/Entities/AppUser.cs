namespace API.Entities;

public class AppUser
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public required string UserName { get; set; }
    public required string Email { get; set; }
    public required byte[] PasswordHash { get; set; }
    public byte[] PasswordSalt { get; set; }
}