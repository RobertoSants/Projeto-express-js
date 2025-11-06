// Processador simulado para PayPal
const PaymentProcessor = require("./PaymentProcessor");

class PayPalPayment extends PaymentProcessor {
  validate(info) {
    if (!info.paypalAccount || !info.amount) return { ok: false, error: "Conta PayPal inválida" };
    return { ok: true };
  }

  async pay(info) {
    return {
      method: "paypal",
      transactionId: `PP-${Math.floor(Math.random()*1000000)}`,
      amount: info.amount,
      processedAt: new Date().toISOString()
    };
  }

  notify(info, result) {
    console.log(`[PayPal] Pagamento ${result.transactionId} realizado (PayPal)`);
  }
}

module.exports = PayPalPayment;