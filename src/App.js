import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./conponents/Header";

import "./App.css";
import Offer from "./containers/Offer";
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
            <Route path="/offer/:id">
              {/* <Product /> */}
              <Offer />
            </Route>

            <Route path="/offers">
              <Offers />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
