

export const triggerNewPost = function(post) {
  return {
    type: 'NEW_POST',
    post,
  }
}

export const likePost = function(id) {
  return {
    type: 'LIKE_POST',
    id,
  }
}

export const setCardLayout = function(bool) {
  return {
    type: 'SET_CARD_LAYOUT',
    useCardLayout: bool,
  }
}