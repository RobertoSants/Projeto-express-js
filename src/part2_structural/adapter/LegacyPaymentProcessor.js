// LegacyPaymentProcessor.js — Interface antiga (incompatível)
class LegacyPaymentProcessor {
  processPayment(orderId, amount) {
    throw new Error("Método abstrato — deve ser implementado");
  }
}
module.exports = LegacyPaymentProcessor;