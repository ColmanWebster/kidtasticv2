import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import { Link } from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Slide from "@material-ui/core/Slide";
import Countdown from "../Countdown/index";
import HomeText from "./images/home/hometext.png";
import HomeIcon from "./images/home/homeicon.png";
import LoginText from "./images/login/logintext.png";
import LoginIcon from "./images/login/loginicon.png";
import DashText from "./images/dashboard/dashtext.png";
import DashIcon from "./images/dashboard/dashicon.png";
import TimerText from "./images/timer/timertext.png";
import TimerIcon from "./images/timer/timericon.png";
import LogoutText from "./images/logout/logouttext.png";
import LogoutIcon from "./images/logout/logouticon.png";
import "./navstyle.css";

const navLinks = [
	{
		link: "/",
		title: (
			<img
				src={HomeText}
				alt="Home text"
				style={{ width: "84px", height: "23px" }}
			/>
		),
		icon: (
			<img
				src={HomeIcon}
				alt="House Icon"
				style={{ width: "50px", height: "50px" }}
			/>
		),
	},
	{
		link: "/login",
		title: (
			<img
				src={LoginText}
				alt="Login text"
				style={{ width: "95px", height: "30px", paddingTop: "5px" }}
			/>
		),
		icon: (
			<img
				src={LoginIcon}
				alt="Login Icon"
				style={{ width: "50px", height: "50px" }}
			/>
		),
	},
	{
		link: "/dashboard",
		title: (
			<img
				src={DashText}
				alt="Dashboard text"
				style={{ width: "180px", height: "29px" }}
			/>
		),
		icon: (
			<img
				src={DashIcon}
				alt="Dashboard Icon"
				style={{ width: "56px", height: "56px" }}
			/>
		),
	},
	{
		link: "/logout",
		title: (
			<img
				src={LogoutText}
				alt="Logout text"
				style={{ width: "106px", height: "29px" }}
			/>
		),
		icon: (
			<img
				src={LogoutIcon}
				alt="Login Icon"
				style={{ width: "85px", height: "63px" }}
			/>
		),
	},
];

function HideOnScroll(props) {
	const { children, window } = props;
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = useScrollTrigger({ target: window ? window() : undefined });

	return (
		<Slide appear={false} direction="down" in={!trigger}>
			{children}
		</Slide>
	);
}

HideOnScroll.propTypes = {
	children: PropTypes.element.isRequired,
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window: PropTypes.func,
};

export default function HideAppBar(props) {
	const [showTimer, setShowTimer] = useState(false);

	return (
		<React.Fragment>
			<CssBaseline />
			<HideOnScroll {...props}>
				<AppBar className="appbarr" style={{ backgroundColor: "#f4ff82" }}>
					<Toolbar>
						{navLinks.map((link) => {
							return (
								<Link to={link.link}>
									<Button
										onClick={() => props.setActiveLink(link.link)}
										style={
											props.selected === link.link
												? { textDecoration: "underline" }
												: {}
										}
										startIcon={link.icon}
									>
										<Typography variant="inherit">{link.title}</Typography>
									</Button>
								</Link>
							);
						})}
					</Toolbar>
					<Button
						onClick={() => setShowTimer(!showTimer)}
						style={{ position: "absolute", right: "20px", top: "5px" }}
					>
						<img
							src={TimerIcon}
							alt="Home Icon"
							style={{ width: "50px", height: "50px" }}
						/>
						<img
							src={TimerText}
							alt="Home text"
							style={{ width: "116px", height: "29px" }}
						/>
						{/* <Typography variant="inherit">Timer</Typography> */}
					</Button>
				</AppBar>
			</HideOnScroll>
			<Toolbar />
			<Container>
				{/* <Box my={2}>
          {[...new Array(12)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
            )
            .join("\n")}
        </Box> */}
			</Container>
			<Countdown show={showTimer} />
		</React.Fragment>
	);
}
