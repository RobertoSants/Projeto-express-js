// Subject que gerencia observadores de estoque
// Responsável por notificar observers quando produtos entram em estoque.
class StockSubject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    if (!observer || typeof observer.update !== "function") {
      throw new Error("Observer inválido (deve implementar update)");
    }
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter(o => o !== observer);
  }

  notify(product) {
    // Notifica todos os observadores; erros em um não interrompem os demais
    this.observers.forEach(o => {
      try { o.update(product); } catch (err) { console.error("Erro notify observer:", err.message); }
    });
  }
}

module.exports = StockSubject;