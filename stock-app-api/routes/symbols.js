const express = require('express');

function createSymbolsRouter(symbolsData) {
  const router = express.Router();

  // GET /api/symbols
  router.get('/', (_, res) => {
    res.json(symbolsData);
  });

  // GET /api/symbols/<symbol>
  router.get('/:symbol', (req, res) => {
    const symbol = req.params.symbol.toUpperCase();
    const symbolInfo = symbolsData.find(s => s.symbol === symbol);

    if (!symbolInfo) {
      return res.status(404).json({ error: 'Symbol no encontrado' });
    }

    res.json(symbolInfo);
  });

  return router;
}

module.exports = createSymbolsRouter;
