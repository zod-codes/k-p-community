import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Router basename="/k-p-community">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App
