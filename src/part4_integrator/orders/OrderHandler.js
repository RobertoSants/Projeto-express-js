// Classe base para aplicar o Chain of Responsibility
class OrderHandler {
  setNext(handler) {
    this.next = handler;
    return handler;
  }

  handle(order) {
    if (this.next) return this.next.handle(order);
    return { ok: true, order };
  }
}

module.exports = OrderHandler;