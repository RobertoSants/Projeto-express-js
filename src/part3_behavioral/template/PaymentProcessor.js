// Template Method abstrato
// Define o algoritmo geral: validate -> process -> notify
class PaymentProcessor {
  async processPayment(paymentInfo) {
    // passo 1: validação (comportamento comum, mas delega método)
    const valid = this.validate(paymentInfo);
    if (!valid.ok) return { ok: false, error: valid.error };

    // passo 2: processamento (método específico)
    const result = await this.process(paymentInfo);

    // passo 3: notificação (comportamento que pode ser comum ou específico)
    this.notify(paymentInfo, result);

    return { ok: true, result };
  }

  // Métodos abstratos/esperados — implementados nas subclasses
  validate(paymentInfo) { throw new Error("validate() deve ser implementado"); }
  process(paymentInfo) { throw new Error("process() deve ser implementado"); }
  notify(paymentInfo, result) { /* opcional: pode ser override */ }
}

module.exports = PaymentProcessor;