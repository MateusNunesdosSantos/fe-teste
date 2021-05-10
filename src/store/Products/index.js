import { products } from './list';

const ACTIONS = {
  LISTAR: 'PRODUTOS_LISTAR',
};

const STATE_INITIAL = {
  products: products,
};

export const productReducer = (state = STATE_INITIAL, action) => {
  return state;
};
