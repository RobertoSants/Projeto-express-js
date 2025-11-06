// Classe concreta responsável por enviar notificações via Push
const NotificationService = require("./NotificationService");

class PushNotificationService extends NotificationService {
  async sendNotification(recipient, subject, content) {
    // Retorna um objeto simulando o envio do push notification
    return {
      channel: "push",
      recipient,
      subject,
      content,
      sentAt: new Date()
    };
  }
}

module.exports = PushNotificationService;