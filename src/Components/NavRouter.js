import { Home } from "./Home";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Edit } from "./Edit";

export const NavRouter = ({state, setState}) => {
    const styling = {
        display: "flex",
        justifyContent: "center",
        listStyle:'none',
        
    }

    const linkStyle = {
        textDecoration: "none",
        fontSize: "2em",
        color: "black"
    }
    return (
        <Router>
        <div>
          <nav style={styling}>
            <ul className="nav-list" style={styling}>
              <li className="nav-item"style={{margin: '1em 2.5em'}}>
                <Link defaultChecked className="nav-link" style={linkStyle} to="/">Add</Link>
              </li>
              <li className="nav-item"style={{margin: '1em 2.5em'}}>
                <Link className="nav-link" style={linkStyle} to="/edit">Edit</Link>
              </li>
            </ul>
          </nav>
            <Switch>
              <Route exact path="/">
                <Home state={state} setState={setState} />
              </Route>
              <Route path="/edit">
                <Edit state={state} setState={setState} />
              </Route>
            </Switch>
        </div>
      </Router>
    )
}

