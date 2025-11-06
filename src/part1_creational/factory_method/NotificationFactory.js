// Cria dinamicamente o tipo de notificação solicitado
const EmailNotificationService = require("./EmailNotificationService");
const SmsNotificationService = require("./SmsNotificationService");
const PushNotificationService = require("./PushNotificationService");

function getNotificationService(type) {
  // Define qual classe concreta deve ser usada de acordo com o tipo
  switch (type?.toLowerCase()) {
    case "sms": return new SmsNotificationService();
    case "push": return new PushNotificationService();
    default: return new EmailNotificationService(); // Tipo padrão
  }
}

module.exports = { getNotificationService };
