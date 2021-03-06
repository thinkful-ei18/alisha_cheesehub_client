import { REACT_APP_API_BASE_URL} from '../config';

export const fetchCheeses = () => dispatch => {
  dispatch(fetchCheesesRequest());

  fetch(`${REACT_APP_API_BASE_URL}/cheeses`)
    .then(res => {
      if(!res.ok) {
        return Promise.reject(res.statusText)
      }
      return res.json()
    })
    .then(cheeses => {
      dispatch(fetchCheesesSuccess(cheeses))
    })
    .catch(err => dispatch(fetchCheesesError(err)))
}


export const FETCH_CHEESES_REQUEST ='FETCH_CHEESES_REQUEST'
export const fetchCheesesRequest = () => ({
  type: FETCH_CHEESES_REQUEST
})

export const FETCH_CHEESES_SUCCESS ='FETCH_CHEESES_SUCCESS'
export const fetchCheesesSuccess = cheeses => ({
  type: FETCH_CHEESES_SUCCESS,
  cheeses
})

export const FETCH_CHEESES_ERROR ='FETCH_CHEESES_ERROR'
const fetchCheesesError = err => ({
  type: FETCH_CHEESES_ERROR,
  err
})