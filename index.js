const express = require("express");
const app = express();

// Parte 1 (criacional)
const loggingRoutes = require("./src/part1_creational/routes/loggingRoutes");
const notificationRoutes = require("./src/part1_creational/routes/notificationRoutes");

// Parte 2 (estrutural)
const paymentRoutes = require("./src/part2_structural/routes/paymentRoutes");
const exportRoutes = require("./src/part2_structural/routes/exportRoutes");
const facadeRoutes = require("./src/part2_structural/routes/facadeRoutes");

// Parte 3 (comportamental)
const stockRoutes = require("./src/part3_behavioral/routes/stockRoutes");
const discountRoutes = require("./src/part3_behavioral/routes/discountRoutes");
const orderRoutes = require("./src/part3_behavioral/routes/orderRoutes");
const paymentTemplateRoutes = require("./src/part3_behavioral/routes/paymentTemplateRoutes");

app.use(express.json());

// Root — mensagem simples para testes via navegador
app.get("/", (req, res) => {
  res.send("Bem vindo ao meu servidor Express! Rotas: /logs, /notify, /payments, /exports, /facade, /stock, /discounts, /orders, /payproc");
});

// Rotas
app.use("/logs", loggingRoutes);
app.use("/notify", notificationRoutes);

app.use("/payments", paymentRoutes);
app.use("/exports", exportRoutes);
app.use("/facade", facadeRoutes);

app.use("/stock", stockRoutes);
app.use("/discounts", discountRoutes);
app.use("/orders", orderRoutes);
app.use("/payproc", paymentTemplateRoutes);

// Porta
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));