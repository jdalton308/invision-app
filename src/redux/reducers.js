
import { createStore } from 'redux';
import initialData from './initial-state';


function reducer(state = initialData, action) {

  // TEMP
  switch (action.type) {
    case 'NEW_POST':
      return {
        ...state,
        post: action.value
      };
    default:
      return state;
  }
}


export default createStore(reducer);