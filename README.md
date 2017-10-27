# Invision Application App


## Heroku Deployment
The app is living on a free heroku instance at https://boiling-forest-99098.herokuapp.com/.



## Local Development
An NPM script is used for local development, which starts a local webpack server:

- `npm i` to install dependencies
- `npm start` to start a local webpack server on port 8080



## Tools Used
- __JS__: [React](//reactjs.org), [React Redux](//github.com/reactjs/react-redux), [React Router](//reacttraining.com/react-router/web/guides/philosophy)
- __CSS__: [Sass (.scss)](http://sass-lang.com/)
- __Build__: [Webpack](//webpack.js.org), [Babel](//http://babeljs.io/)



## Directory Organization
All the source files for the project are found within the `/src/` folder:
- __Image assets__: `/src/assets/` - This includes `.svg` files that are used as references for inline use of `<svg>` elements
- __CSS__: `/src/css` - This contains a `variables.scss` file that, as expected, has all the variables used through the styles.  The rest of the styles will be here, broken into component-specific files.  __Note__: There are no inline, JS-object-based styles used.  Although I am aware of that convention, I usually prefer to use CSS.
- __JS__: `/src/app.js` & `/src/components` - This where the bootstrapping occurs, and where all the components reside, respectively.  Component files are grouped in folders labeled for their highest-level component, but contain their children are also organized here.  That is, unless the child is used in other places as well.
- __Bulid__: `/webpack.config.js` - This contains the configuration options for building the app
- __Server__: `/server.js` - A simple Express server



## Considerations and Comments
Hopefully it is obvious that this is more of a prototype than something that would be leveraged for production.  With not wanting to take any more time than needed, I tried to only demonstrate the principles of React and Redux while, of course, attempting to recreate the designs as perfectly as I could.  Thus, a lot of the links won't do anything besides show a hover effect.  What does work are the following:
- Creating a post (though without the ability to insert HTML or media files)
- Liking a post
- Navigating to the profile page (through the profile drop-down in the header, and back through the brand logo)
- A Subtle animation when navigating between home and profile pages
- Toggling the layout between a grid and list


I think that this still omits a few large items, though, so in case these are concerns, here is how I woiuld implement the missing interactions:
- _Filtering by Video/Image_: This would have been done within the `post-list.js` component, likely just with a single reducer function.
- _Video Player_: I was picturing a click on a video to trigger a video player that would expand from the post out to be a modal, sitting on top of the page. The player would have been a simple HTML5 player, and would have used the HTML5 and JS api to start, control, and close the video.
- _Image Focus_: Like the video, I envisioned clicking on an image to trigger a material-style expansion our to a modal with an enlarged, or full-size, view of the image.
- _Replying to a Post_: This would depend on how a reply should be displayed, as it would either become data that is attached to the original post, or become a unique post with some reference to the original post.  Either way, a typical reducer would be created, and the new post would be placed appropriately.
- _Timestamps_: All the timestamps for the posts are just strings right now, but in the real-world I would expect an epoch timestamp to be assiciated, then some simple math to calculate the time-since.
- _Sockets and Service Workers_: Probably all new messaging apps today are asynchronous, and should implement the use of web-sockets to recieve and push updates, and, depending on how robust the app is, service workers would be useful for notifications, in addition the their usual HTTP-request help.
