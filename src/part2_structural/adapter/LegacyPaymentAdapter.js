// LegacyPaymentAdapter.js — Adapta o novo sistema para o legado
const LegacyPaymentProcessor = require("./LegacyPaymentProcessor");
const NewPaymentSystem = require("./NewPaymentSystem");

class LegacyPaymentAdapter extends LegacyPaymentProcessor {
  constructor() {
    super();
    this.newSystem = new NewPaymentSystem();
  }

  processPayment(orderId, amount) {
    const request = { orderId, amount };
    return this.newSystem.executePayment(request);
  }
}

module.exports = LegacyPaymentAdapter;