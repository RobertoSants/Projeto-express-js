// Observer que reage quando um produto volta ao estoque
// Aqui simulamos notificação por console; em produção, integraria com e-mail/SMS.
class ProductObserver {
  constructor(name = "Observer") {
    this.name = name;
  }

  update(product) {
    console.log(`[ProductObserver:${this.name}] Produto disponível: ${product.name} (stock=${product.stock})`);
  }
}

module.exports = ProductObserver;