const express = require("express");
const app = express();
const logs = require("./src/part1_creational/routes/logs");
const notifications = require("./src/part1_creational/routes/notifications");

// Middleware para interpretar JSON
app.use(express.json());

// Rotas da aplicação
app.use("/logs", logs);
app.use("/notify", notifications);

// Inicializa o servidor
app.listen(3000, () => console.log("Servidor rodando em http://localhost:3000"));