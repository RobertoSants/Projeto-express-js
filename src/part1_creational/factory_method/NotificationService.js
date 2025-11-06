// Classe base que define o formato de uma notificação
class NotificationService {
  // Método genérico que as subclasses devem implementar
  async sendNotification(recipient, subject, content) {
    throw new Error("O método deve ser implementado pelas subclasses.");
  }
}

module.exports = NotificationService;