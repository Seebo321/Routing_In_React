import React from "react";
import Welcome from "./components/welcome/welcome";
import Clock from "./components/clock/Clock";
import Contact from "./components/contact/Contact";
import Navigation from "./components/navigation/navigation";
import Jepardy from "./components/Jeopardy/Jeopardy"
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
      <Route
        exact path="/"
        render={(props) => <Welcome {...props} name="Samuel" />}
      />
      <Route
      exact path="/welcome/:name"
        render={(props) => <Welcome {...props} name={props.match.params.name}/>}
      />
      <Route exact path="/clock" component= {Clock} />
      <Route exact path="/contact" component= {Contact} />
      <Route exact path="/jepardy" component= {Jepardy}/>
      <Route
      component={Error404}/>
      </Switch>
    </div>
  );
}
export default App;

// this site helped https://programmingwithmosh.com/react/react-router-add-the-power-of-navigation/
const Error404 = () => {
  return "404 Page is not found."
}
export {Error404 }