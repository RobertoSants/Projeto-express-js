// Verifica se há estoque suficiente para os itens do pedido
const OrderHandler = require("./OrderHandler");

class InventoryValidator extends OrderHandler {
  handle(order) {
    // Simulação: se qualquer item tiver stock <= 0 => falha
    const out = order.items.some(i => i.stock !== undefined && i.stock <= 0);
    if (out) return { ok: false, error: "Estoque insuficiente" };
    // prossegue na cadeia
    return super.handle(order);
  }
}

module.exports = InventoryValidator;