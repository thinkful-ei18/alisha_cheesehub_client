import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import cheeseReducer from './reducers/cheese.reducers';

export default createStore(
  cheeseReducer, 
  applyMiddleware(thunk)
);

// export default createStore(
//   cheeseReducer,
// );