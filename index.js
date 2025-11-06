const express = require("express");
const app = express();

// Importa as rotas da Parte 1 (Padrões Criacionais)
const loggingRoutes = require("./src/part1_creational/routes/loggingRoutes");
const notificationRoutes = require("./src/part1_creational/routes/notificationRoutes");

// Importa as rotas da Parte 2 (Padrões Estruturais)
const paymentRoutes = require("./src/part2_structural/adapter/routes/paymentRoutes");
const exportRoutes = require("./src/part2_structural/decorator/routes/exportRoutes");

// Configurações básicas
app.use(express.json());

// Rota raiz (mensagem padrão)
app.get("/", (req, res) => {
  res.send("Bem vindo ao meu servidor Express! Use /logs, /notify, /payments ou /exports para testar as rotas.");
});

// Associa as rotas principais
app.use("/logs", loggingRoutes);
app.use("/notify", notificationRoutes);
app.use("/payments", paymentRoutes);
app.use("/exports", exportRoutes);

// Inicia o servidor
const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));