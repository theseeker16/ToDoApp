import { Router } from 'express';
import * as  todoController  from './controller'

const routes = new Router();

routes.post('/todos', todoController.createTodo);
routes.get('/todos', todoController.getTodos);
routes.get('/todos/:idTodo', todoController.getTodo);
routes.delete('/todos/:idTodo', todoController.removeTodo);

export default routes;

