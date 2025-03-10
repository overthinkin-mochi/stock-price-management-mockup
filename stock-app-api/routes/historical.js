const express = require('express');

function createHistoricalRouter(historicalData) {
  const router = express.Router();

  // GET /api/historical
  router.get('/', (_, res) => {
    res.json(historicalData);
  });

  // GET /api/historical/<symbol>
  router.get('/:symbol', (req, res) => {
    const symbol = req.params.symbol.toUpperCase();
    const symbolHistory = historicalData.find(h => h.symbol === symbol);

    if (!symbolHistory) {
      return res.status(404).json({ error: 'Historial para symbol no encontrado' });
    }

    res.json(symbolHistory);
  });

  return router;
}

module.exports = createHistoricalRouter;

