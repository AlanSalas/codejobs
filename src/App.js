import React from "react";
import ThemeProvider from "./providers/ThemeProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import JobDetail from "./pages/JobDetail";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/job/:id" exact>
            <JobDetail />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
