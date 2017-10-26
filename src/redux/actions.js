

export const triggerNewPost = function(post) {
  return {
    type: 'NEW_POST',
    post,
  }
}