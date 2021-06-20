using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApp.Services
{
    public class NullMailService : IMailService //creates interface
    {
        //create field for logger
        private readonly ILogger<NullMailService> _logger;

        //constructor
        public NullMailService(ILogger<NullMailService> logger)
        {
            this._logger = logger;
        }

        public void SendMessage(string to, string subject, string body)
        {
            //log message
            _logger.LogInformation($"To: {to} Subject: {subject} Body: {body}");
        }
    }
}
