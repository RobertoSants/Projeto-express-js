const express = require("express");
const router = express.Router();
const { getNotificationService } = require("../factory_method/NotificationFactory");
const logger = require("../singleton/LoggingService.js");

// Envia uma notificação
router.post("/", async (req, res) => {
  const { type, recipient, subject, content } = req.body;

  // Verifica se o destinatário foi informado
  if (!recipient) return res.status(400).json({ error: "recipient é obrigatório" });

  try {
    // Usa a fábrica para escolher o serviço correto
    const service = getNotificationService(type);
    const result = await service.sendNotification(recipient, subject, content);

    // Registra o envio no log
    logger.info(`Notificação enviada via ${result.channel}`);
    res.json(result);
  } catch (error) {
    logger.error(error.message);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;