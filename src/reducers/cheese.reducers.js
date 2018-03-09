import * as actions from '../actions/cheese.actions'

const initialState = {
  cheeses: ['gouda'],
  loading: false,
  error: null
}

export default (state=initialState, action) => {

  if (action.type === actions.FETCH_CHEESES_REQUEST) {
    return {
      ...state,
      loading: true
    }
  }

  if (action.type === actions.FETCH_CHEESES_SUCCESS) {
    return {
      ...state,
      loading: false,
      error: null,
      cheeses: action.cheeses
    }
  }

  if (action.type === actions.FETCH_CHEESES_ERROR) {
    return {
      ...state,
      loading: false,
      error: action.error
    }
  }

  return state;
}