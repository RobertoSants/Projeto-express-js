// Facade que simplifica integração com serviços externos:
// exemplo: pagamentos (via adapter) + notificação externa (simulada)
const ThirdPartyPaymentAdapter = require("./ThirdPartyPaymentAdapter");

class ExternalFacade {
  constructor() {
    this.paymentAdapter = new ThirdPartyPaymentAdapter();
  }

  // placeExternalOrder faz pagamento via adapter e retorna formato simplificado
  placeExternalOrder(amount, customer) {
    const paymentResult = this.paymentAdapter.process(amount, customer);
    // Em real: também chamaria serviço de envio/estoque/CRM — aqui apenas consolidamos resposta
    return {
      status: paymentResult.status,
      externalTransactionId: paymentResult.externalId,
      amount: paymentResult.processedAt ? paymentResult.detail.total : amount,
      processedAt: paymentResult.processedAt
    };
  }
}

module.exports = ExternalFacade;