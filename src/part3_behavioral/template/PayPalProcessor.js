// Processador para PayPal (simulado)
const PaymentProcessor = require("./PaymentProcessor");

class PayPalProcessor extends PaymentProcessor {
  validate(paymentInfo) {
    if (!paymentInfo.paypalAccount) return { ok: false, error: "Conta PayPal faltando" };
    return { ok: true };
  }

  async process(paymentInfo) {
    return {
      method: "paypal",
      transactionId: `PP-${Math.floor(Math.random() * 1000000)}`,
      amount: paymentInfo.amount,
      processedAt: new Date().toISOString()
    };
  }

  notify(paymentInfo, result) {
    console.log(`[PayPal] Notificação: pagamento ${result.transactionId} processado.`);
  }
}

module.exports = PayPalProcessor;