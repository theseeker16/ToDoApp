import Api from '../Api/Api'
import {
  CREATE_TODO_SUCCESSFUL,
  CREATE_TODO_FAILURE,
  DELETE_TODO_SUCESSFUL,
  DELETE_TODO_FAILURE,
  CREATE_TODO,
  GET_ALL_TODO_SUCESSFUL,
  GET_ALL_TODO_FAILURE,

} from '../constants/constants'



export const getTodos = () => async dispatch => {
  try {
    const data = await Api.getAllTodos();

    return dispatch({ type: GET_ALL_TODO_SUCESSFUL, data });
  } catch (error) {

    return dispatch({ type: GET_ALL_TODO_FAILURE, error });
  }
}

export const createTodo = args => async dispatch => {
  dispatch({ type: CREATE_TODO });
  try {
    await Api.createTodo(args);

    dispatch({ type: CREATE_TODO_SUCCESSFUL });
    return await dispatch(getTodos());
  } catch (error) {
    return dispatch({ type: CREATE_TODO_FAILURE, error });
  }
}

export const deleteTodo = id => async (dispatch, getState) => {

  const todo = getState().todo.data.filter(todo => todo.id === id)[0];

  try {
    await Api.deleteTodo(id);
    dispatch({ type: DELETE_TODO_SUCESSFUL });
    return await dispatch(getTodos());
  } catch (error) {
    return dispatch({ type: DELETE_TODO_FAILURE, error, todo });
  }
}