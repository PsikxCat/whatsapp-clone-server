import express from 'express';

import connectDB from './dbConnection/index.js';
import configExpress from './config/index.js';
import applyRoutes from './routes/index.js';

const app = express();
configExpress(app);

const PORT = process.env.PORT || 3000;

const startServer = () => {
  Promise.all([connectDB()])
    .then(() => {
      applyRoutes(app);

      app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
      });
    });
};

startServer();
