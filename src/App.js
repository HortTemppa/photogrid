import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import Photogrid from "./components/Photogrid";
import SingleImage from "./components/SingleImage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Photogrid />
        </Route>
        <Route path="/:id">
          <SingleImage />
        </Route>
      </Switch>
      <Redirect from="*" to="/" />
    </Router>
  );
}

export default App;
