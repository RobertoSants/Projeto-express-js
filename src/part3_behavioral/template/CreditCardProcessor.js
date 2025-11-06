// Processador para cartão de crédito
const PaymentProcessor = require("./PaymentProcessor");

class CreditCardProcessor extends PaymentProcessor {
  validate(paymentInfo) {
    // validações mínimas (número, cvv, etc)
    if (!paymentInfo.cardNumber) return { ok: false, error: "Cartão inválido" };
    return { ok: true };
  }

  async process(paymentInfo) {
    // Simulação de chamada ao gateway
    return {
      method: "credit_card",
      transactionId: `CC-${Math.floor(Math.random() * 1000000)}`,
      amount: paymentInfo.amount,
      processedAt: new Date().toISOString()
    };
  }

  notify(paymentInfo, result) {
    console.log(`[CreditCard] Notificação: pagamento ${result.transactionId} processado.`);
  }
}

module.exports = CreditCardProcessor;