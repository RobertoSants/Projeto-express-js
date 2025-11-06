// Frete baseado em valor (simula relação com distância)
const ShippingStrategy = require("./ShippingStrategy");

class DistanceShipping extends ShippingStrategy {
  calculate(subtotal) {
    // pequena lógica: pedidos grandes têm frete menor (promoção)
    if (subtotal > 200) return 10;
    return 25;
  }
}

module.exports = DistanceShipping;