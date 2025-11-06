// Adapter que converte interface para a API externa simulada
// Simula uma biblioteca externa com método pay(payload)
class ExternalGateway {
  // Simula uma API externa
  pay(payload) {
    // retorna objeto com status e id externo
    return {
      externalId: `EXT-${Math.floor(Math.random() * 1000000)}`,
      status: "OK",
      processedAt: new Date().toISOString(),
      detail: payload
    };
  }
}

class ThirdPartyPaymentAdapter {
  constructor() {
    this.gateway = new ExternalGateway();
  }

  // Nosso sistema chama process(amount, customer) — adapter transforma para gateway.pay
  process(amount, customer) {
    const payload = {
      total: amount,
      customerName: customer.name || customer,
      timestamp: new Date().toISOString()
    };
    return this.gateway.pay(payload);
  }
}

module.exports = ThirdPartyPaymentAdapter;