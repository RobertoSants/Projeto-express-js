// Serviço simulado de produtos
// Recebe uma lista de ids e retorna objetos de produto com preço.
class ProductService {
  getProductsByIds(ids = []) {
    // Simulamos nomes e preços simples
    return ids.map((id, index) => ({
      id,
      name: `Produto ${id}`,
      price: 50 + (index * 25) // preço incremental fictício
    }));
  }
}

module.exports = ProductService;