import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AlBums from "./Album";
import Photos from "./Photos";

function App() {
  return (
    <Router>
      <h1>Hello CodeSandbox</h1>
      <Switch>
        <Route exact path="/" component={AlBums} />
        <Route exact path="/:idAlbum/photos" component={Photos} />
      </Switch>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
