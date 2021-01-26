import React from "react"
import { Dashboard, Favorites, Error } from "./pages"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import NavBar from "./components/NavBar"

function App() {
  return (
    <Router>
    <NavBar />
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
