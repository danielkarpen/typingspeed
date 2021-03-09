import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Test from "../Test";
import TBody from "./TBody";

const Scores = () => {
  return (
    <>
      <div>Typing Speed Scores</div>
      <table>
        <thead>
          <td>Initials</td>
          <td>Words Per Minute</td>
        </thead>
        <TBody />
      </table>
      <ul>
        <li>
          <Link to="/Test">Start!</Link>
          <Route exact path="/Test">
            <Test />
          </Route>
        </li>
      </ul>
      <Router>
        <div>
          <Switch>
            <Route path="/Test">
              <Test />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default Scores;
