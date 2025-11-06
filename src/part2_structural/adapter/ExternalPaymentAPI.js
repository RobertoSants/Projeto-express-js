// Simula uma API externa de pagamento com formato diferente
class ExternalPaymentAPI {
  processPayment(details) {
    console.log("Processando pagamento na API externa...");
    return {
      status: "success",
      transactionId: Math.floor(Math.random() * 1000000),
      processedAt: new Date(),
      externalData: details
    };
  }
}

module.exports = ExternalPaymentAPI;