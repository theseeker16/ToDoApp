import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
//we added here all middlewares to the whole project.
export default (app) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(morgan('dev'));
  app.use(cors());

};