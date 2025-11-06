// Facade que unifica chamadas a vários serviços
// Fornece um método simples placeOrder(customerId, productIds)
const CustomerService = require("./CustomerService");
const ProductService = require("./ProductService");
const PaymentService = require("./PaymentService");
const OrderService = require("./OrderService");

class EcommerceFacade {
  constructor() {
    this.customerService = new CustomerService();
    this.productService = new ProductService();
    this.paymentService = new PaymentService();
    this.orderService = new OrderService();
  }

  // placeOrder encapsula todo o fluxo: cliente -> produtos -> pagamento -> pedido
  placeOrder(customerId, productIds = []) {
    // 1) buscar cliente
    const customer = this.customerService.getCustomerById(customerId);

    // 2) buscar detalhes dos produtos
    const products = this.productService.getProductsByIds(productIds);

    // 3) calcular total (orderService também faz, mas mantemos aqui para clareza)
    const total = products.reduce((s, p) => s + p.price, 0);

    // 4) processar pagamento
    const payment = this.paymentService.processPayment(customer, total);

    // 5) criar o pedido
    const order = this.orderService.createOrder(customer, products, payment);

    // Retorna o pedido (já com status e info de pagamento)
    return order;
  }
}

module.exports = EcommerceFacade;