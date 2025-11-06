// Adapter que converte o formato interno da aplicação para o formato da API externa
const ExternalPaymentAPI = require("./ExternalPaymentAPI");

class PaymentAdapter {
  constructor() {
    this.api = new ExternalPaymentAPI();
  }

  processPayment(amount, method, customer) {
    // converte o formato interno em um formato que a API externa entende
    const adaptedData = {
      totalValue: amount,
      paymentType: method,
      user: customer
    };

    // delega o processamento para a API externa
    return this.api.processPayment(adaptedData);
  }
}

module.exports = PaymentAdapter;