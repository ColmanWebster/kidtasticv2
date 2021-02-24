import React, { useState, useEffect } from "react";
import "./style.css";

export default function Countdown({ show }) {
	const [timerOn, setTimerOn] = useState(false);
	const [timerTime, setTimerTime] = useState(0);
	const [timerStart, setTimerStart] = useState(0);
	const [currentTime, setCurrentTIme] = useState(0);

	useEffect(() => {
		const timer =
			localStorage.getItem("timer") &&
			JSON.parse(localStorage.getItem("timer"));
		if (timer?.active) {
			setTimerTime(timer.time);
			setTimerStart(timer.start);
			setTimerOn(true);
		}
	}, []);

	useEffect(() => {
		if (timerOn) {
			const timer = setTimeout(() => {
				localStorage.setItem(
					"timer",
					JSON.stringify({
						active: true,
						time: timerTime,
						start: timerStart,
					}),
				);
				const current = timerTime - (Date.now() - timerStart) / 1000;
				const hours = ("0" + Math.floor(current / 3600)).slice(-2);
				const minutes = ("0" + Math.floor((current - hours * 3600) / 60)).slice(
					-2,
				);
				const seconds = (
					"0" + Math.ceil(current - hours * 3600 - minutes * 60)
				).slice(-2);
				if (current <= 0) {
					setCurrentTIme({ hours: "00", minutes: "00", seconds: "00" });
					setTimerOn(false);
					localStorage.removeItem("timer");
					//put logic to handle time runing out;
					timeRunsOut();
					return clearTimeout(timer);
				}
				setCurrentTIme({ hours, minutes, seconds });
			}, 1000);
			return () => clearTimeout(timer);
		}
	}, [timerStart, timerTime, timerOn, currentTime]);

	const timeRunsOut = () => {
		alert("time is up buttercup!");
	};

	const calculateTime = ({ target: { name } }) => {
		const timeChange = timerTime + Number(name);
		const newTime =
			timeChange < 0 ? 0 : timeChange > 216000 ? 216000 : timeChange;
		const hours = ("0" + Math.floor(newTime / 3600)).slice(-2);
		const minutes = ("0" + Math.floor((newTime - hours * 3600) / 60)).slice(-2);
		const seconds = ("0" + (newTime - hours * 3600 - minutes * 60)).slice(-2);
		setTimerTime(newTime);
		setCurrentTIme({ minutes, seconds, hours });
	};

	return (
		<div className="Countdown" style={{ display: show ? "block" : "none" }}>
			<div className="Countdown-header">TIMER</div>
			<div className="Countdown-label">Hours : Minutes : Seconds</div>
			<div className="Countdown-display">
				<button name="3600" onClick={calculateTime}>
					H &#8679;
				</button>
				<button name="60" onClick={calculateTime}>
					M &#8679;
				</button>
				<button name="1" onClick={calculateTime}>
					S &#8679;
				</button>

				<div className="Countdown-time">
					{currentTime.hours || "00"} : {currentTime.minutes || "00"} :{" "}
					{currentTime.seconds || "00"}
				</div>

				<button name="-3600" onClick={calculateTime}>
					H &#8681;
				</button>
				<button name="-60" onClick={calculateTime}>
					M &#8681;
				</button>
				<button name="-1" onClick={calculateTime}>
					S &#8681;
				</button>
			</div>

			{!timerOn && (
				<button
					className="Button-start"
					onClick={() => {
						setTimerOn(true);
						setTimerStart(Date.now());
					}}
				>
					Start
				</button>
			)}
		</div>
	);
}
