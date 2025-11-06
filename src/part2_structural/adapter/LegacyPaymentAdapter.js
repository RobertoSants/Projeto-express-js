// Adapta a nova API para a interface legada
const LegacyPaymentProcessor = require("./LegacyPaymentProcessor");
const NewPaymentSystem = require("./NewPaymentSystem");

class LegacyPaymentAdapter extends LegacyPaymentProcessor {
  constructor() {
    super();
    this.newSystem = new NewPaymentSystem();
  }

  processPayment(orderId, amount) {
    // converte os parâmetros legados para a estrutura esperada pela nova API
    const req = { orderId, amount };
    return this.newSystem.executePayment(req);
  }
}

module.exports = LegacyPaymentAdapter;