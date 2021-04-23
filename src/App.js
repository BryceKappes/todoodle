import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header"
import NotFound from "./components/NotFound"
import Todoodle from "./views/Todoodle"
import Home from "./views/home"
import Login from "./components/Login"
import Users from "./components/Users"
function App(){
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/todoodle" component={Todoodle} />
        <Route path="/login" component={Login} />
        <Route path="/users" component={Users} />
        <Route path="/" component={NotFound} />

      </Switch>
    </>
  );
}

export default App;
