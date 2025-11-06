const express = require("express");
const app = express();

app.use(express.json());

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
const orderRoutesPart3 = require("./src/part3_behavioral/routes/orderRoutes"); // evita conflito de nome
const paymentTemplateRoutes = require("./src/part3_behavioral/routes/paymentTemplateRoutes");

// Parte 4 (integrador)
const catalogRoutes = require("./src/part4_integrator/routes/catalogRoutes");
const cartRoutes = require("./src/part4_integrator/routes/cartRoutes");
const orderRoutesPart4 = require("./src/part4_integrator/routes/orderRoutes");
const discountRoutesPart4 = require("./src/part4_integrator/routes/discountRoutes");
const integrationRoutes = require("./src/part4_integrator/routes/integrationRoutes");

// Root — mensagem simples para testes via navegador
app.get("/", (req, res) => {
  res.send("Bem vindo ao meu servidor Express! Rotas: /logs, /notify, /payments, /exports, /facade, /stock, /discounts, /orders (parte3), /payproc, /catalog, /cart, /ecomorders, /discountsys, /integrations");
});

// Montagem das rotas

// Parte 1
app.use("/logs", loggingRoutes);
app.use("/notify", notificationRoutes);

// Parte 2
app.use("/payments", paymentRoutes);
app.use("/exports", exportRoutes);
app.use("/facade", facadeRoutes);

// Parte 3
app.use("/stock", stockRoutes);
app.use("/discounts", discountRoutes);
app.use("/orders", orderRoutesPart3);         // rota /orders -> handlers da Parte 3 (chain demo)
app.use("/payproc", paymentTemplateRoutes);

// Parte 4 (E-commerce integrador)
// Observação: para evitar conflitos com /orders já usado pela Parte 3, utilizarei aqui /ecomorders
app.use("/catalog", catalogRoutes);
app.use("/cart", cartRoutes);
app.use("/ecomorders", orderRoutesPart4);     // rota para os pedidos do e-commerce (Parte 4)
app.use("/discountsys", discountRoutesPart4);
app.use("/integrations", integrationRoutes);

// Porta
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));