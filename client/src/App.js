import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Signup from "./pages/Signup";
import { StoreProvider } from "./utils/GlobalState";
import NewNav from "./components/Nav/Nav";
import Watch from "./pages/Watch";
import Imagine from "./pages/Imagine";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Dashboard from "./pages/Dashboard";
import View from "./pages/View";
import Game from "./pages/Game";
import { AnimatePresence } from "framer-motion";
import API from "./utils/API";
function App() {
  const [activeLink, setActiveLink] = useState("");
  const [currentUser, setCurrentUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.checkCurrentUser().then(({ data }) => {
      console.log(data);
      if (data.user) {
        setCurrentUser(data.user);
      }
      setLoading(false);
    });
  }, []);
  const location = useLocation();

  return (
    <>
      <Wrapper>
        <div>
          {/* <StoreProvider> */}
          {/* {!loading && !currentUser.name && <Redirect to="/login" />} */}
          <NewNav
            selected={activeLink}
            setActiveLink={setActiveLink}
            isLoggedIn={!!currentUser.name}
          />
          <AnimatePresence>
            <Switch location={location} key={location.pathname}>
              <Route exact path="/" component={Home} />
              <Route exact path="/home" component={Home} />
              <Route
                exact
                path="/watch"
                component={() => (
                  <Watch currentUser={currentUser} loading={loading} />
                )}
              />
              <Route exact path="/watch/:id" component={View} />
              <Route
                exact
                path="/login"
                component={() => <Login setCurrentUser={setCurrentUser} />}
              />
              <Route exact path="/signup">
                <Signup setCurrentUser={setCurrentUser} />
              </Route>
              <Route
                exact
                path="/dashboard"
                component={() => (
                  <Dashboard
                    currentUser={currentUser}
                    loading={loading}
                    user={currentUser}
                  />
                )}
              />

              <Route exact path="/game" component={Game} />
              <Route exact path="/imagine" component={Imagine} />
              <Route component={NoMatch} />
            </Switch>
          </AnimatePresence>
          {/* </StoreProvider> */}
        </div>
      </Wrapper>
      <Footer isLoggedIn={!!currentUser.name} />
    </>
  );
}

export default App;
