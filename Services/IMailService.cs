namespace WebApp.Services
{
    //created an interface for different cases
    public interface IMailService
    {
        void SendMessage(string to, string subject, string body);
    }
}