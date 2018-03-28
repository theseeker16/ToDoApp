import {
  CREATE_TODO_SUCCESSFUL,
  CREATE_TODO_FAILURE,
  GET_ALL_TODO_SUCESSFUL,
  GET_ALL_TODO_FAILURE,
  DELETE_TODO_SUCESSFUL,
  DELETE_TODO_FAILURE,
} from '../constants/constants'

const initialState = {
  data: [],
  error: null,
  isFetched:false,
  isError:false,
  isLoading:false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_TODO_SUCESSFUL:
      return {
        ...state,
        data: [action.data],
        isLoading: false,
        isFetched: true,
      }

    case GET_ALL_TODO_FAILURE:
      return {
        ...state,
        isFetched: false,
        error: action.error,
      }
    case CREATE_TODO_SUCCESSFUL:
      return {
        ...state,
        isFetched: true,
        isLoading: false,
        isError: false,
      }
    case CREATE_TODO_FAILURE:
      return {
        ...state,
        error: action.error,
        isFetched: false,
        isError: true
      }
    case DELETE_TODO_SUCESSFUL:
      return state;

    case DELETE_TODO_FAILURE:
      return {
        ...state,
        error: action.error,
      }

    default:
      return state;
  }

}
