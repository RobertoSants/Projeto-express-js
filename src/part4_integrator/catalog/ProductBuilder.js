// Implementa um Builder para criar produtos com vários atributos.
// Uso: new ProductBuilder().setName(...).setCategory(...).setPrice(...).setStock(...).build()
class ProductBuilder {
  constructor() {
    this.product = {
      id: null,
      name: null,
      category: null,
      price: 0,
      stock: 0,
      metadata: {}
    };
  }

  setId(id) { this.product.id = id; return this; }
  setName(name) { this.product.name = name; return this; }
  setCategory(category) { this.product.category = category; return this; }
  setPrice(price) { this.product.price = price; return this; }
  setStock(stock) { this.product.stock = stock; return this; }
  setMetadata(meta) { this.product.metadata = meta; return this; }

  build() {
    // retorna uma cópia para evitar alterações externas diretas
    return { ...this.product };
  }
}

module.exports = ProductBuilder;