const express = require('express');
const fs = require('fs').promises;
const symbolsRouter = require('./routes/symbols');
const historicalRouter = require('./routes/historical');

const app = express();
const PORT = 9090;

// funcion que carga los archivos de entrada de forma asyncronica
async function loadData() {
  try {
    console.log('Comenzamos a cargar datos!');
    const symbolsData = await fs.readFile('symbols.json', 'utf8');
    console.log('symbols.json cargado exitosamente');

    const historicalData = await fs.readFile('historical.json', 'utf8');
    console.log('historical.json cargado exitosamente');

    const parsedSymbols = JSON.parse(symbolsData).symbolsList;
    const parsedHistorical = JSON.parse(historicalData).historicalStockList;

    console.log(`Símbolos cargados: ${parsedSymbols.length}`);
    console.log(`Datos históricos cargados: ${parsedHistorical.length}`);

    return {
      symbols: parsedSymbols,
      historical: parsedHistorical
    };
  } catch (error) {
    console.error('Error en la carga de datos:', error);
    throw error;
  }
}

// inicio asyncrono de la api
async function initializeApp() {
  try {
    console.log('Se va a iniciar la API!');
    const data = await loadData();

    app.use('/api/symbols', symbolsRouter(data.symbols));
    app.use('/api/historical', historicalRouter(data.historical));

    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
      console.log('Rutas disponibles:');
      console.log('- GET /api/symbols');
      console.log('- GET /api/symbols/<symbol>');
      console.log('- GET /api/historical');
      console.log('- GET /api/historical/<symbol>');
    });
  } catch (error) {
    console.error('Error al inicializar la aplicación:', error);
  }
}

// Manejo de errores global por buenas practicas
process.on('unhandledRejection', (error) => {
  console.error('Error no manejado:', error);
});

initializeApp();
