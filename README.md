## Desenvolvido por
**Roberto dos Santos Silva Junior**  
Curso: Sistemas de Informação – IFAL (Campus Maceió)  
Professor: Augusto Melo  
Disciplina: Análise e Projeto de Sistemas de Informação (APSI)

# Projeto — Padrões de Projeto (Design Patterns) com Node.js / Express

Este projeto foi desenvolvido como parte da disciplina **Análise e Projeto de Sistemas de Informação (APSI)**, ministrada pelo professor **Augusto Melo** no **Instituto Federal de Alagoas (IFAL)**.  
O objetivo da atividade foi **implementar e demonstrar o uso de múltiplos Design Patterns** através de uma aplicação backend em **Node.js com Express**, abordando desde padrões criacionais até comportamentais e estruturais, culminando em um projeto integrador simulando um e-commerce.

Cada exercício implementa um cenário prático de uso dos padrões de projeto vistos em aula, mostrando como eles ajudam a estruturar e organizar a lógica de negócio de forma modular e escalável.

Os padrões foram aplicados conforme os princípios de orientação a objetos, buscando baixo acoplamento e alta coesão. O uso dos padrões visa resolver problemas reais de projeto como reutilização, extensão de funcionalidades e separação clara de responsabilidades.

---

## Tecnologias Utilizadas

- **Node.js (v18+)**
- **Express.js**
- **JavaScript (ES6)**
- **VS Code + REST Client** (para testes de API)

---

## Estrutura do Projeto

A aplicação está organizada em pastas que representam cada categoria de padrões de projeto:

Projeto-express-js/<br>
│<br>
├── src/<br>
│   ├── part1_creational/       → Exercícios 1.1 e 1.2 (Singleton, Factory)<br>
│   ├── part2_structural/       → Exercícios 2.1, 2.2 e 2.3 (Adapter, Decorator, Facade)<br>
│   ├── part3_behavioral/       → Exercícios 3.1 a 3.4 (Observer, Strategy, Chain, Template)<br>
│   └── part4_integrator/       → Exercício 4.1 (E-commerce com múltiplos padrões)<br>
│<br>
├── index.js                    → Integra todos os módulos e rotas<br>
├── api_test.http               → Testes REST práticos (usando extensão REST Client)<br>
├── package.json<br>
└── README.md                   → Documento de entrega com explicações e instruções<br>

Cada pasta contém:
- **services/** → classes e implementações dos padrões  
- **routes/** → endpoints REST para testes  
- **controllers/** (quando aplicável) → camadas de controle intermediárias

---

## Como Executar o Projeto

1. **Clonar o repositório**
   ```bash
   git clone https://github.com/<seu-usuario>/<nome-do-repo>.git
   cd <nome-do-repo>
2. Instalar dependências
   ```bash
   npm install
3. Executar o servidor
   ```bash
   node index.js
O servidor iniciará por padrão em:
http://localhost:3000

## Como Testar os Endpoints
O projeto inclui um arquivo api_test.http, compatível com a extensão REST Client do VS Code.
Basta abrir o arquivo e clicar em "Send Request" sobre cada requisição.

As requisições estão divididas conforme as partes do projeto:
| Parte | Categoria          | Exemplos de Endpoints                                               |
| ----- | ------------------ | ------------------------------------------------------------------- |
| 1     | Criacionais        | `/logs`, `/notify`                                                  |
| 2     | Estruturais        | `/payments`, `/exports`, `/facade`                                  |
| 3     | Comportamentais    | `/stock`, `/discounts`, `/orders`, `/payproc`                       |
| 4     | Projeto Integrador | `/catalog`, `/cart`, `/ecomorders`, `/discountsys`, `/integrations` |

Cada endpoint foi criado com o objetivo de demonstrar o comportamento prático dos padrões de projeto e facilitar testes rápidos sem necessidade de front-end.

## Padrões de Projeto Implementados
| Categoria              | Padrões                                                      | Aplicação                                                          |
| ---------------------- | ------------------------------------------------------------ | ------------------------------------------------------------------ |
| **Criacionais**        | Singleton, Factory Method                                    | Logger centralizado e sistema de notificações                      |
| **Estruturais**        | Adapter, Decorator, Facade                                   | Integrações, exportação de dados e simplificação de microsserviços |
| **Comportamentais**    | Observer, Strategy, Chain of Responsibility, Template Method | Alertas financeiros, estratégias de desconto e fluxo de pedidos    |
| **Projeto Integrador** | Combinação de múltiplos padrões                              | Simulação de e-commerce completo e escalável                       |

## Conclusão
O projeto demonstra de forma prática como os Design Patterns podem ser aplicados em uma aplicação backend real, ajudando na organização, manutenção e escalabilidade do sistema.
Além disso, a estrutura modular facilita o aprendizado individual de cada padrão e sua combinação em sistemas maiores, como o e-commerce integrador da Parte 4.
