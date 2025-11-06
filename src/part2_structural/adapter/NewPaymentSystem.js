// Nova API moderna de pagamentos
class NewPaymentSystem {
  executePayment(paymentRequest) {
    return {
      status: "success",
      transactionId: Math.floor(Math.random() * 1000000),
      amount: paymentRequest.amount,
      orderId: paymentRequest.orderId,
      processedAt: new Date()
    };
  }
}
module.exports = NewPaymentSystem;