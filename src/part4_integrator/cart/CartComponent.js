// Interface base do Composite (todos os itens/cestas estendem esta classe)
class CartComponent {
  getPrice() { throw new Error("getPrice() deve ser implementado"); }
}

module.exports = CartComponent;