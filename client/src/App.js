import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Bio from "../src/pages/Bio";
import Contact from "../src/pages/Contact";
import Portfolio from "../src/pages/Portfolio";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={["/bio/"]}>
            <Bio />
          </Route>
          <Route exact path={["/portfolio/"]}>
            <Portfolio />
          </Route>
          <Route exact path={["/contact/"]}>
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;