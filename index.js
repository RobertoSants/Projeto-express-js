const express = require("express");
const app = express();
const logs = require("./src/part1_creational/routes/logs");
const notifications = require("./src/part1_creational/routes/notifications");
const payments = require("./src/part2_structural/routes/payments");
const reports = require("./src/part2_structural/routes/reports");

// Middleware para interpretar JSON
app.use(express.json());

// Rotas da aplicação
app.use("/logs", logs);
app.use("/notify", notifications);
app.use("/payments", payments);
app.use("/reports", reports);

// Rota principal opcional — apenas para teste no navegador
app.get("/", (req, res) => {
  res.send("Bem vindo ao meu servidor Express! Para teste, utilize as rotas: /logs, /notify, /payments, /reports");
});

// Inicializa o servidor
app.listen(3000, () => console.log("Servidor rodando em http://localhost:3000"));