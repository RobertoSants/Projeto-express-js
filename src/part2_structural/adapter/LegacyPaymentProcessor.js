// "interface" do sistema legado
// Define o método processPayment(orderId, amount) usado pelo código legado.
class LegacyPaymentProcessor {
  processPayment(orderId, amount) {
    throw new Error("Implementar processPayment no adaptador");
  }
}

module.exports = LegacyPaymentProcessor;