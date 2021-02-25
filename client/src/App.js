import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Signup from "./pages/Signup";
import { StoreProvider } from "./utils/GlobalState";
import NewNav from "./components/Nav/Nav";
import Watch from "./pages/Watch";
import Login from "./pages/Login";
// import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Dashboard from "./pages/Dashboard";
import View from "./pages/View";
import Game from "./pages/Game";

function App() {
	const [activeLink, setActiveLink] = useState("");
	const [currentUser, setCurrentUser] = useState({});

	useEffect(() => console.log(currentUser), [currentUser]);
	return (
		<>
			{" "}
			<Router>
				<Wrapper>
					<div>
						{/* <StoreProvider> */}
						<NewNav selected={activeLink} setActiveLink={setActiveLink} />
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/home" component={Home} />
							<Route exact path="/watch" component={Watch} />
							<Route exact path="/watch/:id" component={View} />
							<Route exact path="/login" component={Login} />
							<Route exact path="/signup">
								<Signup setCurrentUser={setCurrentUser} />
							</Route>
							<Route
								exact
								path="/dashboard"
								component={() => <Dashboard user={currentUser} />}
							/>
							<Route exact path="/game" component={Game} />
							<Route component={NoMatch} />
						</Switch>
						{/* </StoreProvider> */}
					</div>
				</Wrapper>
				{/* <Footer /> */}
			</Router>
		</>
	);
}

export default App;
