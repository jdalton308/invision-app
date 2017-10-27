
import { createStore } from 'redux';
import initialData from './initial-state';

// Track post ids
let nextId = 23; // increments


function reducer(state = initialData, action) {

  switch (action.type) {


    // Create new post
    //--------
    case 'NEW_POST':
      action.post.id = nextId++;
      return {
        ...state,
        allPosts: [action.post, ...state.allPosts],
        myPosts: [action.post, ...state.myPosts],
      }
      break;


    // Like a post
    //--------
    case 'LIKE_POST':
      const newMyPosts = state.myPosts.map((post) => {
        if (post.id === action.id) {
          post.content.liked = true;
        }
        return post;
      });
      const newAllPosts = state.allPosts.map((post) => {
        if (post.id === action.id) {
          post.content.liked = true;
          newMyPosts.unshift(post); // copy to own posts
        }
        return post;
      });

      return {
        ...state,
        allPosts: newAllPosts,
        myPosts: newMyPosts
      };
      break;


    // Toggle the card/list layout
    //--------
    case 'SET_CARD_LAYOUT':
      return {
        ...state,
        useCardLayout: action.useCardLayout
      };
      break;


    // Default
    //--------
    default:
      return state;
  }
}


export default createStore(reducer);