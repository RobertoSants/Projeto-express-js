// interface base para estratégias de desconto
class DiscountStrategy {
  applyDiscount(amount) { throw new Error("applyDiscount deve ser implementado"); }
}

module.exports = DiscountStrategy;