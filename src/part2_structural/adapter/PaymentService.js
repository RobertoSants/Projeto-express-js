// Serviço de pagamento que usa o Adapter
const PaymentAdapter = require("./PaymentAdapter");

class PaymentService {
  constructor() {
    this.adapter = new PaymentAdapter();
  }

  process(amount, method, customer) {
    return this.adapter.processPayment(amount, method, customer);
  }
}

module.exports = PaymentService;