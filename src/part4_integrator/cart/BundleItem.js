// Item composto que contém múltiplos CartComponent (itens ou outros bundles)
const CartComponent = require("./CartComponent");

class BundleItem extends CartComponent {
  constructor(name) {
    super();
    this.name = name;
    this.items = [];
  }

  add(item) {
    // aceita ProductItem ou BundleItem
    this.items.push(item);
  }

  getPrice() {
    return this.items.reduce((s, it) => s + (it.getPrice ? it.getPrice() : 0), 0);
  }
}

module.exports = BundleItem;