// Nova API de pagamentos com interface diferente
class NewPaymentSystem {
  executePayment(paymentRequest) {
    // Simula processamento e retorno de objeto com dados da transação
    return {
      status: "success",
      transactionId: `NEW-${Math.floor(Math.random() * 1000000)}`,
      orderId: paymentRequest.orderId,
      amount: paymentRequest.amount,
      processedAt: new Date().toISOString()
    };
  }
}

module.exports = NewPaymentSystem;