import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./conponents/Header";

import "./App.css";
import Offers from "./containers/Offers";

function App() {
  return (
    <>
      <div>
        <div>
          <Header />
        </div>
        <Router>
          <Switch>
            <Route path="/product/:id">{/* <Product /> */}</Route>
            <Route path="/">
              <Offers />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
