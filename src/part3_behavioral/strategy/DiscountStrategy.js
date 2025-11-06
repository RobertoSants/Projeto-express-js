// Interface base para estratégias de desconto
class DiscountStrategy {
  applyDiscount(amount) {
    throw new Error("Método abstrato applyDiscount deve ser implementado.");
  }
}

module.exports = DiscountStrategy;