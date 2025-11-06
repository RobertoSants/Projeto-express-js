// Serviço simulado de pagamentos
class PaymentService {
  processPayment(customer, totalAmount) {
    // Simula um processamento e retorna dados da transação
    return {
      transactionId: `TX-${Math.floor(Math.random() * 1000000)}`,
      status: "paid",
      amount: totalAmount,
      customer: customer.name,
      processedAt: new Date().toISOString()
    };
  }
}

module.exports = PaymentService;