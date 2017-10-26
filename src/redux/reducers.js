
import { createStore } from 'redux';
import initialData from './initial-state';


function reducer(state = initialData, action) {

  switch (action.type) {

    case 'NEW_POST':
      return {
        ...state,
        allPosts: [action.post, ...state.allPosts],
        myPosts: [action.post, ...state.myPosts],
      }

    default:
      return state;
  }
}


export default createStore(reducer);