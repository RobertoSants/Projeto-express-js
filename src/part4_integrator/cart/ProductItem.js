// Item folha do Composite, representa um produto individual no carrinho
const CartComponent = require("./CartComponent");

class ProductItem extends CartComponent {
  constructor(id, name, price) {
    super();
    this.id = id;
    this.name = name;
    this.price = price;
  }

  getPrice() {
    return this.price;
  }
}

module.exports = ProductItem;