import React from "react"
import { Dashboard, Favorites, Error } from "./pages"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import ToastComp from "./components/Toast";

function App() {
  return (
    <Router>
    <NavBar />
    <ToastComp />
      <Switch>
        <Route path="/" exact={true}>
          <Dashboard />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
