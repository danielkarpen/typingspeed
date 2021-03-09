import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Scores from "./Scores";
import Test from "./Test";

function Main() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/Test">
            <Test />
          </Route>

          <Route exact path="/">
            <Scores />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default Main;
