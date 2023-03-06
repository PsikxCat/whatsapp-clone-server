import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';

const configExpress = app => {
  app.use(bodyParser.json()); // para manejar solicitudes JSON
  app.use(bodyParser.urlencoded({ extended: true })); // para manejar solicitudes con URL codificadas
  app.use(compression()); // para comprimir las respuestas de la aplicación
  app.use(cors()); // para permitir las solicitudes desde cualquier origen
};

export default configExpress;
