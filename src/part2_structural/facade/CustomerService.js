// Serviço simulado de clientes
// Aqui retornamos dados simulados para demonstrar a facade.
class CustomerService {
  getCustomerById(id) {
    // Simulação de retorno de um cliente
    return {
      id,
      name: `Cliente ${id}`,
      email: `cliente${id}@example.com`,
      address: "Rua Exemplo, 123"
    };
  }
}

module.exports = CustomerService;