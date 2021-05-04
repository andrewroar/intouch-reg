import "./App.css";
import React, { useReducer } from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

import Signup from "./components/signup";
import Sucess from "./components/sucess";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Signup />
            </Route>
            <Route exact path="/sucess">
              <Sucess />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
