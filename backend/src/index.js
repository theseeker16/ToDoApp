import express from 'express';
import db from './config/db';
import middlewares from './config/middleswares'
import { todoRoutes } from './modules'

const app = express();
const PORT = process.env.PORT || 8080;

//Initialize db database
db();
//Initialize middlewares
middlewares(app);
//Routing to api
app.use('/api', [todoRoutes])

app.listen(PORT, () =>
  console.log(`Running app on port ${PORT}`));
