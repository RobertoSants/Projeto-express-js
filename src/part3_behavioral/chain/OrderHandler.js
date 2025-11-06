// Interface base para os handlers da cadeia
class OrderHandler {
  setNext(handler) {
    this.next = handler;
    return handler;
  }

  handle(order) {
    // por padrão, atribui para o próximo handler se existir
    if (this.next) {
      return this.next.handle(order);
    }
    return { ok: true, order };
  }
}

module.exports = OrderHandler;