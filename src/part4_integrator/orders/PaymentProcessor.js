// Template Method abstrato para processadores de pagamento
class PaymentProcessor {
  async processPayment(info) {
    // 1) validar dados
    const v = this.validate(info);
    if (!v.ok) return v;

    // 2) processar
    const r = await this.pay(info);
    // 3) notificar (opcional)
    this.notify(info, r);
    return { ok: true, result: r };
  }

  validate(info) { throw new Error("validate deve ser implementado"); }
  async pay(info) { throw new Error("pay deve ser implementado"); }
  notify(info, result) { /* opcional */ }
}

module.exports = PaymentProcessor;