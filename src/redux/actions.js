

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