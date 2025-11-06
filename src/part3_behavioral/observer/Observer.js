// Interface/base para observadores
// Define o método update que os observadores concretos implementam.
class Observer {
  update(stockSymbol, price) {
    throw new Error("Método 'update' deve ser implementado pelo Observer concreto.");
  }
}

module.exports = Observer;