// Observer concreto que "envia" SMS (simulado)
// Aqui apenas imprimimos no console para demonstrar o comportamento.
const Observer = require("./Observer");

class SmsObserver extends Observer {
  constructor(phoneNumber) {
    super();
    this.phoneNumber = phoneNumber;
  }

  update(stockSymbol, price) {
    console.log(`[SMS -> ${this.phoneNumber}] ${stockSymbol} = R$ ${price.toFixed(2)}`);
  }
}

module.exports = SmsObserver;