// Classe concreta responsável por enviar notificações via e-mail
const NotificationService = require("./NotificationService");

class EmailNotificationService extends NotificationService {
  async sendNotification(recipient, subject, content) {
    // Retorna um objeto simulando o envio do e-mail
    return {
      channel: "email",
      recipient,
      subject,
      content,
      sentAt: new Date()
    };
  }
}

module.exports = EmailNotificationService;