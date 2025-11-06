// rota para exemplificar a facade
const express = require("express");
const router = express.Router();
const EcommerceFacade = require("../facade/EcommerceFacade");
const logger = require("../../part1_creational/singleton/LoggingService");

// POST /facade/order
// body: { customerId: "C1", productIds: ["P1","P2"] }
router.post("/order", (req, res) => {
  const { customerId, productIds } = req.body;

  if (!customerId || !Array.isArray(productIds)) {
    return res.status(400).json({ error: "Campos obrigatórios: customerId, productIds (array)" });
  }

  const facade = new EcommerceFacade();
  const order = facade.placeOrder(customerId, productIds);

  logger.info(`Facade: pedido criado ${order.orderId}`);
  res.status(201).json(order);
});

module.exports = router;