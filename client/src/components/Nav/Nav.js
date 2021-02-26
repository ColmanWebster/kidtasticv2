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
import GestureIcon from "@material-ui/icons/Gesture";
import YouTubeIcon from "@material-ui/icons/YouTube";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import HomeIcon from "@material-ui/icons/Home";
import GradeIcon from "@material-ui/icons/Grade";
import ChildCareIcon from "@material-ui/icons/ChildCare";
import AccessAlarmsIcon from "@material-ui/icons/AccessAlarms";
import Countdown from "../Countdown/index";
import HouseIcon from "./images/houseIcon.png";
// import Hometxt from "./hometxt1.png";
// import Logintxt from "./images/login3.png";
import Logintxt from "./images/logintxttest.png";
import LoginIcon from "./images/login.png";
import hometxttest from "./images/hometxttest.png";
import DBtxttest from "./images/dashboardtxttest.png";
import Watchtxttest from "./images/watchtxttest.png";
import Drawxttest from "./images/drawtxttest.png";
import Dashimg from "./images/dashimg.png";
import Imaginetxttest from "./images/imaginetxt.png";
import "./navstyle.css";

const navLinks = [
	{
		link: "/",
		title: (
			<img
				src={hometxttest}
				alt="Home text"
				style={{ width: "84px", height: "23px" }}
			/>
		),
		icon: (
			<img
				src={HouseIcon}
				alt="House Icon"
				style={{ width: "50px", height: "50px" }}
			/>
		),
	},
	{
		link: "/login",
		title: (
			<img
				src={Logintxt}
				alt="Login text"
				style={{ width: "95px", height: "30px" }}
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
				src={DBtxttest}
				alt="Home text"
				style={{ width: "180px", height: "29px" }}
			/>
		),
		icon: (
			<img
				src={Dashimg}
				alt="Login Icon"
				style={{ width: "60px", height: "50px" }}
			/>
		),
	},
	// {
	// 	link: "/watch",
	// 	title: (
	// 		<img
	// 			src={Watchtxttest}
	// 			alt="Home text"
	// 			style={{ width: "102px", height: "29px" }}
	// 		/>
	// 	),
	// 	icon: <YouTubeIcon />,
	// },
	// {
	// 	link: "/Draw",
	// 	title: (
	// 		<img
	// 			src={Drawxttest}
	// 			alt="Login Icon"
	// 			style={{ width: "109px", height: "25px" }}
	// 		/>
	// 	),
	// 	icon: <GestureIcon />,
	// },
	// {
	// 	link: "/imagine",
	// 	title: (
	// 		<img
	// 			src={Imaginetxttest}
	// 			alt="Login Icon"
	// 			style={{ width: "135px", height: "29px" }}
	// 		/>
	// 	),
	// 	icon: <GradeIcon />,
	// },
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
						style={{ position: "absolute", right: "20px", top: "15px" }}
						startIcon={<AccessAlarmsIcon />}
					>
						<Typography variant="inherit">Timer</Typography>
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
