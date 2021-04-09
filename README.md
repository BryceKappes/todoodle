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