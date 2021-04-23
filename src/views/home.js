import "../App.css";
import { useEffect, useReducer, createContext } from "react";
import todosList from "../todos.json";
import TodoList from "../components/TodoList";
import Footer from "../components/Footer";
import { Route } from "react-router-dom";
import Youtube from "../components/Youtube"


export const TodosContext = createContext(null);

function reducer(state, action) {
  switch(action.type){
      case "UPDATE_INPUT":
        return {
          ...state,
          userInput: action.payload,
        };
      case "ADD_TODO":
        return {
          userInput: "",
          todos: [
            ...state.todos, 
            {
              title: action.payload,
              id: Date.now(),
              completed: false,
            },
          ],
        };
        case "TOGGLE_COMPLETE":
          return {
            ...state,
            todos: state.todos.map((todo) => {
              let newTodo = {...todo};
              if (newTodo.id === action.payload){
                newTodo.completed = !newTodo.completed;
              }
              return newTodo
            }),
          };
        case "DELETE_TODO":
          return {
            ...state,
            todos: state.todos.filter((todo)=> todo.id !== action.payload)
          }
        case "CLEAR_COMPLETE":
          return {
            ...state,
            todos: state.todos.filter((todo)=> !todo.completed)
          };
    default:
      return state;
  }
}

function Home() {
  const [state, dispatch] = useReducer(reducer, {
    todos: todosList,
    userInput: "",
  });

  function handleChange(event) {
    dispatch({type:"UPDATE_INPUT", payload: event.target.value});
  }

  function handleKeyDown(event){
    if(event.key==="Enter"){
      dispatch({type: "ADD_TODO", payload: state.userInput});
    }
  }

  useEffect(()=>{
    window.addEventListener("keydown", handleKeyDown)
    return ()=>{
      window.removeEventListener("keydown", handleKeyDown)
    }
  })

  function clearComplete(event) {
    dispatch({type: "CLEAR_COMPLETE"})
  }

  return (
    <div className="todo-container">
      <div id="youtube">
        <Youtube/>
      </div>
      <TodosContext.Provider value={dispatch}>
        <Route exact path="/">
          <section className="todoapp">
            <header className="header">
              <h1>todos</h1>
              <input
                className="new-todo"
                placeholder="What needs to be done?"
                autoFocus
                onChange={event=>handleChange(event)}
                value={state.userInput}
              />
            </header>
            <TodoList todos={state.todos} />
            <Footer clearComplete = {clearComplete}
            itemsLeft={state.todos.filter((todo)=>{
                if(todo.completed === true){
                  return false
                }
                return true
            }).length}/>
          </section>
        </Route>
        <Route exact path="/active">
          <section className="todoapp">
            <header className="header">
              <h1>todos</h1>
              <input
                className="new-todo"
                placeholder="What needs to be done?"
                autoFocus
                onChange={event=>handleChange(event)}
                value={state.userInput}
              />
            </header>
            <TodoList 
              todos={state.todos.filter((todo)=>{
                if(todo.completed === true){
                  return false
                }
                return true
              })}
            />
            <Footer clearComplete = {clearComplete}
              itemsLeft={state.todos.filter((todo)=>{
                if(todo.completed === true){
                  return false
                }
                return true
            }).length}
            />
          </section>
        </Route>
        <Route exact path="/completed">
          <section className="todoapp">
            <header className="header">
              <h1>todos</h1>
              <input
                className="new-todo"
                placeholder="What needs to be done?"
                autoFocus
                onChange={event=>handleChange(event)}
                value={state.userInput}
              />
            </header>
            <TodoList 
              todos={state.todos.filter((todo)=>{
                if(todo.completed === true){
                  return true
                }
                return false
              })}
            />
            <Footer clearComplete = {clearComplete}
              itemsLeft={state.todos.filter((todo)=>{
                if(todo.completed === true){
                  return false
                }
                return true
            }).length}
            />
          </section>
        </Route>
      </TodosContext.Provider>
    </div>
  );
}

export default Home;