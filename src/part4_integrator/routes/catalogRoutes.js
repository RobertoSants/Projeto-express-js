// Rota que cria produtos via factory e notifica observers
const express = require("express");
const router = express.Router();
const ProductFactory = require("../catalog/ProductFactory");
const StockSubject = require("../catalog/StockSubject");
const ProductObserver = require("../catalog/ProductObserver");

// instância única do assunto de estoque
const stockSubject = new StockSubject();
stockSubject.subscribe(new ProductObserver("PromoObserver"));

// POST /catalog/create
// body: { type: "eletronico", name: "TV X", id: "P100", stock: 5 }
router.post("/create", (req, res) => {
  const { type, name, id, stock } = req.body;
  const product = ProductFactory.create(type, { id, name, stock });
  // notifica observers se houver estoque
  if (product.stock > 0) stockSubject.notify(product);

  res.status(201).json({ message: "Produto criado", product });
});

module.exports = router;