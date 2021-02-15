import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Navbar from "./components/Nav";
import { StoreProvider } from "./utils/GlobalState";
import FavoritesList from "./pages/FavoritesList";
import NewNav from "./components/Nav/Nav";

function App() {
  const [activeLink, setActiveLink] = useState("");
  return (
    <>
      {" "}
      <Router>
        <div>
          <StoreProvider>
            <NewNav selected={activeLink} setActiveLink={setActiveLink} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/favorites" component={FavoritesList} />
              <Route exact path="/posts/:id" component={Detail} />
              <Route component={NoMatch} />
            </Switch>
          </StoreProvider>
        </div>
      </Router>
    </>
  );
}

export default App;
