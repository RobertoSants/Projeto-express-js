// Factory para criar produtos por tipo usando o Builder
const ProductBuilder = require("./ProductBuilder");

// Retorna um produto básico pré-configurado por tipo
class ProductFactory {
  static create(type, overrides = {}) {
    const builder = new ProductBuilder();

    switch ((type || "").toLowerCase()) {
      case "eletronico":
        builder.setCategory("Eletrônicos").setPrice(1500).setStock(10);
        break;
      case "roupa":
        builder.setCategory("Vestuário").setPrice(79.9).setStock(50);
        break;
      case "acessorio":
        builder.setCategory("Acessórios").setPrice(29.9).setStock(100);
        break;
      default:
        builder.setCategory("Diversos").setPrice(49.9).setStock(20);
    }

    // Aplica sobrescritas (nome, id, price, stock)
    if (overrides.id) builder.setId(overrides.id);
    if (overrides.name) builder.setName(overrides.name);
    if (overrides.price !== undefined) builder.setPrice(overrides.price);
    if (overrides.stock !== undefined) builder.setStock(overrides.stock);
    if (overrides.metadata) builder.setMetadata(overrides.metadata);

    return builder.build();
  }
}

module.exports = ProductFactory;