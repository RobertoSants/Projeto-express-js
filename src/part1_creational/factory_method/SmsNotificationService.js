// Classe concreta responsável por enviar notificações via SMS
const NotificationService = require("./NotificationService");

class SmsNotificationService extends NotificationService {
  async sendNotification(recipient, subject, content) {
    // Retorna um objeto simulando o envio do SMS
    return {
      channel: "sms",
      recipient,
      content,
      sentAt: new Date()
    };
  }
}

module.exports = SmsNotificationService;