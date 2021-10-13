
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import Search from "./components/search"
import Property from "./components/property"

function App() {
  return (
    <Router>
    <div className="App container-fluid">
      <header className="App-header bg-dark">
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark" id="top-nav">
          <div className="collapse navbar-collapse justify-content-end">
            <ul className="nav main-nav">
              <li className="nav-item">
                House Search
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/Home" activeClassName="active">Home</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
        <div className="container-fluid">
          <div className="row">
            <div className="content col-sm">
              <Switch>
                <Route path="/home">
                  <Search />
                </Route>
                <Route path="/property">
                  <Property />
                </Route>
                <Route path="/">
                  <Search />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      <footer>

      </footer>
    </div>
    </Router>
  );
}

export default App;
