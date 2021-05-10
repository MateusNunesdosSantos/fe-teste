import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { productReducer } from './Products/index';

const mainReducer = combineReducers({
  products: productReducer,
  form: reduxFormReducer,
});

export default mainReducer;
