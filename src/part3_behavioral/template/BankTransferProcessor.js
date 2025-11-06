// Processador para transferência bancária (simulado)
const PaymentProcessor = require("./PaymentProcessor");

class BankTransferProcessor extends PaymentProcessor {
  validate(paymentInfo) {
    if (!paymentInfo.routingNumber || !paymentInfo.accountNumber) {
      return { ok: false, error: "Dados bancários incompletos" };
    }
    return { ok: true };
  }

  async process(paymentInfo) {
    return {
      method: "bank_transfer",
      transactionId: `BT-${Math.floor(Math.random() * 1000000)}`,
      amount: paymentInfo.amount,
      processedAt: new Date().toISOString()
    };
  }

  notify(paymentInfo, result) {
    console.log(`[BankTransfer] Notificação: pagamento ${result.transactionId} processado.`);
  }
}

module.exports = BankTransferProcessor;