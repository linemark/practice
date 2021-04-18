import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import TodoList from "./pages/TodoList";
import Calendar from "./pages/Calendar";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/todoList">
            <TodoList />
          </Route>
          <Route exact path="/calendar">
            <Calendar />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
