// Interface base para estratégias de frete
class ShippingStrategy {
  // calcula o custo de frete com base no subtotal
  calculate(subtotal) { throw new Error("calculate() deve ser implementado"); }
}

module.exports = ShippingStrategy;