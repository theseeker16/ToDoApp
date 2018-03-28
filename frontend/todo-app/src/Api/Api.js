import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/api';

class TodoApi {

  async createTodo(args) {
    try {
      const { data } = await axios.post('/todos', args);

      return data;
    } catch (error) {
      throw error;
    }
  }

  async getAllTodos() {
    try {
      const { data } = await axios.get('/todos');

      return data;
    } catch (error) {
      throw error;
    }
  }

  async deleteTodo(id) {
    try {
    return await axios.delete(`/todos/${id}`);

    } catch (error) {
      throw error;
    }
  }
}

export default new TodoApi();