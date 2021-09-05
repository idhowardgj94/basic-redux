import { ADD_COUNT } from './actionType';
export const addCount = (m) => ({
  type: ADD_COUNT,
  payload: (n) => n + m, 
});