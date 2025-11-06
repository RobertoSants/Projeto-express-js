// Persiste pedido (simulado) e retorna confirmação
const OrderHandler = require("./OrderHandler");

class OrderPersister extends OrderHandler {
  handle(order) {
    // Simulação de persistência: adiciona um id e retorna sucesso
    const persisted = {
      ...order,
      id: `ORD-${Math.floor(Math.random() * 1000000)}`,
      persistedAt: new Date().toISOString()
    };
    // Na cadeia, termina aqui - retorna ok e o pedido persistido
    return { ok: true, order: persisted };
  }
}

module.exports = OrderPersister;