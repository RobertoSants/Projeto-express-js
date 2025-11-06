// Logger.js — Implementação do padrão Singleton
class Logger {
  constructor(limit = 100) {
    // Se já existir uma instância, retorna ela
    if (Logger.instance) return Logger.instance;

    this.limit = limit; // Quantidade máxima de logs armazenados
    this.logs = []; // Lista de logs em memória
    Logger.instance = this; // Guarda a instância única
  }

  // Método interno responsável por adicionar logs
  _push(level, message) {
    const log = { timestamp: new Date().toISOString(), level, message };
    this.logs.push(log);

    // Se exceder o limite, remove o log mais antigo
    if (this.logs.length > this.limit) this.logs.shift();

    return log;
  }

  // Métodos específicos para diferentes níveis de log
  info(msg) { return this._push("info", msg); }
  warn(msg) { return this._push("warn", msg); }
  error(msg) { return this._push("error", msg); }

  // Retorna os logs recentes (ou todos, se nenhum limite for passado)
  getRecent(n = this.logs.length) { return this.logs.slice(-n); }

  // Limpa todos os registros de log
  clear() { this.logs = []; }
}

// Exporta uma única instância do Logger (Singleton)
module.exports = new Logger();