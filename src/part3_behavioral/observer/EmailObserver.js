// Observer concreto que "envia" email (simulado)

const Observer = require("./Observer");

class EmailObserver extends Observer {
  constructor(email) {
    super();
    this.email = email;
  }

  update(stockSymbol, price) {
    console.log(`[EMAIL -> ${this.email}] Ação ${stockSymbol} atualizada para R$${price.toFixed(2)}`);
  }
}

module.exports = EmailObserver;