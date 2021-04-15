# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# todoodle

KAPSTONE DEV PLAN

    FRONT END DEV PLAN:

        Make a Log in page: Create a component
            -Create link to registration on this page
            -Initialize one state that has two key value pairs(username, password)
            -Create two <input> inside of a <form>.
            -Create a button or an onSubmit for the form that when clicked will hit our api endpoint. 
                You will be using a post method to our api for this
            -If the button hits the endpoint let the user into our app else display an error.
        Register Page: Create a component
            -Initialize a state for user input for password and username. 
            -Use zustand/store
            -Make two <input> inside <form> for the user. 
            -What the user inputs updates the state.
            -Use the updated state to make a post request for api to save that password/username. 
            -Make a button that makes that request when the user clicks it.
            -Todos: Create two components
            -We will need to track our todos inside our store
        Todo Item:
            -This will handle what information will be on each individual todo in the todo list. 
            -Design functionality of deleting a todo or marking it as completed in this component. 
            -TOGGLE_COMPLETE and DELETE_TODO could be used in a store.
        Todo List: 
            -Pass the TodoItem component into this component. 
            -Pass the todo id, todo completed, todo title as props in the <TodoItem />
            -Just use the return JSX to map through the todos in our store and set up how the list of todos will be displayed.
        Create a menu/landing page:
            -Distinguish a main color theme
            -Implement a nav bar using a component library. 
            -The nav bar should display links to our other pages of the app
            -Possibly put the logout button on the nav bar. 


    BACKEND DEV PLAN:

        Create an auth endpoint that handles the login.
            -A post endpoint
            -We will need data saved to the api for a username and password. 
            -Once the user hits this endpoint they should be given a token that keeps them logged in throughout navigation the app. 
                That token will be taken away when the user logs out
        Create a user endpoint: 
            -A post endpoint
            -When the user registers, they will make a post request to this endpoint that saves the username and password that they typed   into the front end. 
            -Possibly give other information like when the user was created and a display name.
        Create an endpoint to handle posting todos:
            -A post endpoint
            -When the user makes a todo and 'saves' it will make a post request to this endpoint so that when the user logs out and then back in it will still be there. 
            -When posting the endpoint it should have an id and a title at the very least. 
        Create an endpoint to delete a todo: 
            -A delete endpoint
            -When the user deletes the todo they will no longer see it when they log out and then back in. 
            -You will essentially be matching the todo id you want to delete and filtering it out of the list.

Reference: John Anderson, Gabby, Todo App Assignment, 

Author: Bryce Kappes, John Cook, Eric Steinke, Isaac Kottlowski
