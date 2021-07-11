import { Switch, BrowserRouter as Router } from "react-router-dom";

import {Add, List} from './pages';
import { default as PublicRoute } from "./routes/publicRoute";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <PublicRoute exact path="/" component={List} />
          <PublicRoute exact path="/add" component={Add} />
          <PublicRoute exact path="/list" component={List} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
