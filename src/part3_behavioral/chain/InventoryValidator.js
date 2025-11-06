// Verifica se há estoque suficiente
const OrderHandler = require("./OrderHandler");

class InventoryValidator extends OrderHandler {
  handle(order) {
    // Simulação: se qualquer produto tiver id "OUT", falha por falta de estoque
    const outOfStock = order.products.some(p => p.id === "OUT");
    if (outOfStock) {
      return { ok: false, error: "Estoque insuficiente para um ou mais produtos." };
    }
    // segue para próximo handler
    return super.handle(order);
  }
}

module.exports = InventoryValidator;