// Implementação do padrão Singleton
// Garante uma única instância de logger compartilhada em toda a aplicação

class LoggingService {
  constructor(limit = 100) {
    // Se já houver uma instância criada, retorna a existente
    if (LoggingService.instance) return LoggingService.instance;

    this.limit = limit; // máximo de logs armazenados
    this.logs = [];     // armazena as mensagens de log
    LoggingService.instance = this; // guarda instância global
  }

  _push(level, message) {
    const log = {
      timestamp: new Date().toISOString(),
      level,
      message
    };

    this.logs.push(log);

    // Mantém apenas os últimos 100 registros
    if (this.logs.length > this.limit) this.logs.shift();

    return log;
  }

  // Métodos para cada tipo de log
  info(msg) { return this._push("info", msg); }
  warn(msg) { return this._push("warn", msg); }
  error(msg) { return this._push("error", msg); }

  // Retorna os logs mais recentes
  getRecent(n = this.logs.length) {
    return this.logs.slice(-n);
  }

  // Limpa os logs da memória
  clear() {
    this.logs = [];
  }
}

// Exporta a instância única do logger
module.exports = new LoggingService();