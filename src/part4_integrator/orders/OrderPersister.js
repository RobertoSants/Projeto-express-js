// Simula persistência do pedido e retorna confirmação
const OrderHandler = require("./OrderHandler");

class OrderPersister extends OrderHandler {
  handle(order) {
    // Simula criar ID e timestamp
    order.id = `ORD-${Math.floor(Math.random() * 1000000)}`;
    order.persistedAt = new Date().toISOString();
    return { ok: true, order };
  }
}

module.exports = OrderPersister;