// Subject (Observable)
// Mantém lista de observers e notifica quando o preço muda.
class StockMarket {
  constructor() {
    this.observers = []; // lista de observers inscritos
    this.prices = {};    // mapa stockSymbol -> price
  }

  // Inscreve um observer
  subscribe(observer) {
    this.observers.push(observer);
  }

  // Remove um observer
  unsubscribe(observer) {
    this.observers = this.observers.filter(o => o !== observer);
  }

  // Atualiza preço e notifica todos
  setPrice(stockSymbol, price) {
    this.prices[stockSymbol] = price;
    this.notifyObservers(stockSymbol, price);
  }

  // Notifica todos os observers inscritos
  notifyObservers(stockSymbol, price) {
    this.observers.forEach(observer => {
      try {
        observer.update(stockSymbol, price);
      } catch (err) {
        // Não interromper a notificação se um observer falhar
        console.error("Erro ao notificar observer:", err.message);
      }
    });
  }
}

module.exports = StockMarket;