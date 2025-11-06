// Observer que atualiza um painel (simulado)
// A implementação aqui apenas faz console.log; em um aplicativo real atualizaria UI/WebSocket.
const Observer = require("./Observer");

class DashboardObserver extends Observer {
  update(stockSymbol, price) {
    console.log(`[DASHBOARD] ${stockSymbol} -> ${price.toFixed(2)} (atualizado no painel)`);
  }
}

module.exports = DashboardObserver;