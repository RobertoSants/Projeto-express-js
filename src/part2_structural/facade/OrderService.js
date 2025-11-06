// Serviço simulado de gerenciamento de pedidos
// Cria um objeto de pedido combinando cliente, produtos e pagamento.
class OrderService {
  createOrder(customer, products, paymentInfo) {
    const total = products.reduce((s, p) => s + p.price, 0);
    return {
      orderId: `ORD-${Math.floor(Math.random() * 1000000)}`,
      customer,
      products,
      total,
      payment: paymentInfo,
      status: "confirmed",
      createdAt: new Date().toISOString()
    };
  }
}

module.exports = OrderService;