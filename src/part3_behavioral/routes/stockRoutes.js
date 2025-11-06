// Rotas para inscrever/desinscrever observers e atualizar preços
const express = require("express");
const router = express.Router();

const StockMarket = require("../observer/StockMarket");
const SmsObserver = require("../observer/SmsObserver");
const EmailObserver = require("../observer/EmailObserver");
const DashboardObserver = require("../observer/DashboardObserver");

// Instância única do mercado (para demo, mantida em memória)
const market = new StockMarket();

// Para controle simples, mantemos references de observers criados
const registered = {};

// POST /stock/subscribe
// body: { id: "obs1", type: "sms"|"email"|"dashboard", destination: "..." }
router.post("/subscribe", (req, res) => {
  const { id, type, destination } = req.body;
  if (!id || !type) return res.status(400).json({ error: "Campos obrigatórios: id, type" });

  let observer;
  switch (type) {
    case "sms":
      observer = new SmsObserver(destination || "000000000");
      break;
    case "email":
      observer = new EmailObserver(destination || "example@example.com");
      break;
    case "dashboard":
      observer = new DashboardObserver();
      break;
    default:
      return res.status(400).json({ error: "Tipo de observer inválido" });
  }

  market.subscribe(observer);
  registered[id] = observer;
  res.status(201).json({ message: `Observer ${id} inscrito como ${type}` });
});

// POST /stock/unsubscribe
// body: { id: "obs1" }
router.post("/unsubscribe", (req, res) => {
  const { id } = req.body;
  const observer = registered[id];
  if (!observer) return res.status(404).json({ error: "Observer não encontrado" });

  market.unsubscribe(observer);
  delete registered[id];
  res.json({ message: `Observer ${id} removido` });
});

// POST /stock/update
// body: { stock: "PETR4", price: 28.5 }
router.post("/update", (req, res) => {
  const { stock, price } = req.body;
  if (!stock || typeof price !== "number") return res.status(400).json({ error: "Campos inválidos" });

  market.setPrice(stock, price);
  res.json({ message: `Preço de ${stock} atualizado para ${price}` });
});

module.exports = router;