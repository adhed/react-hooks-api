# About this app

It's a simple React app to present recent posts from Wordpress blog. It uses just React Hooks because this simple requirements don't need more complex store - useState and useEffect is enough for that.

The code is splited into:
- components
- services
- models
- constants
- styles

1) At first, we're loading posts from Wordpress API (default number is 3, but the user can change this limit to a custom one).
  - if the user is typing something in the limit's input - then we're debouncing these changes and finally we're sending one request to fetch proper number of posts
2) When the user will click a button to load comments - we're turning on the flag that comments should be loaded and every <Post> component from the list will get this info and during the re-rendering - it will fetch its comments. That will be done for every post from the list.
  
Bootstraped with [Create React App](https://github.com/facebook/create-react-app).

## How to run

1) Download the repository
2) Run 'yarn' in the console
3) Run 'yarn start' in the console
4) Application will be available on http://localhost:3000

## Demo

Visit 'https://adhed.github.io/react-hooks-api/build/'
