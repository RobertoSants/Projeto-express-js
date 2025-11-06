// Frete grátis (por exemplo para pedidos acima de X valor)
const ShippingStrategy = require("./ShippingStrategy");

class FreeShipping extends ShippingStrategy {
  calculate(subtotal) {
    // sempre grátis (pode ser estendido para lógica mínima)
    return 0;
  }
}

module.exports = FreeShipping;