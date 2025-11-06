// Implementação concreta do Template Method
const PaymentProcessor = require("./PaymentProcessor");

class CreditCardPayment extends PaymentProcessor {
  validate(info) {
    if (!info.cardNumber || !info.amount) return { ok: false, error: "Dados de cartão inválidos" };
    return { ok: true };
  }

  async pay(info) {
    // Simula gateway — retorna objeto transacional
    return {
      method: "credit_card",
      transactionId: `CC-${Math.floor(Math.random()*1000000)}`,
      amount: info.amount,
      processedAt: new Date().toISOString()
    };
  }

  notify(info, result) {
    console.log(`[CreditCard] Pagamento ${result.transactionId} realizado para ${info.customer || "cliente"}`);
  }
}

module.exports = CreditCardPayment;