import React, { Component } from "react";
import "./style.css";

class Countdown extends Component {
	state = {
		timerOn: false,
		timerStart: 0,
		timerTime: 0,
	};

	componentDidMount() {
		console.log("STARTING TIME!", this.props.time);
		if (this.props.time) this.startTimer(this.props.time);
	}

	startTimer = (start) => {
		this.setState({
			timerOn: true,
			timerTime: typeof start === "number" ? start : this.state.timerTime,
			timerStart: typeof start === "number" ? start : this.state.timerTime,
		});
		this.timer = setInterval(() => {
			const newTime = this.state.timerTime - 1000;
			if (newTime >= 0) {
				this.setState({
					timerTime: newTime,
				});
				localStorage.setItem(
					"timer",
					JSON.stringify({ active: true, remaining: newTime }),
				);
			} else {
				clearInterval(this.timer);
				this.setState({ timerOn: false });
				localStorage.setItem(
					"timer",
					JSON.stringify({ active: false, remaining: 0 }),
				);
				alert("Countdown ended");
			}
		}, 1000);
	};

	stopTimer = () => {
		clearInterval(this.timer);
		this.setState({ timerOn: false });
	};
	resetTimer = () => {
		if (this.state.timerOn === false) {
			this.setState({
				timerTime: this.state.timerStart,
			});
		}
	};

	adjustTimer = (input) => {
		const { timerTime, timerOn } = this.state;
		if (!timerOn) {
			if (input === "incHours" && timerTime + 3600000 < 216000000) {
				this.setState({ timerTime: timerTime + 3600000 });
			} else if (input === "decHours" && timerTime - 3600000 >= 0) {
				this.setState({ timerTime: timerTime - 3600000 });
			} else if (input === "incMinutes" && timerTime + 60000 < 216000000) {
				this.setState({ timerTime: timerTime + 60000 });
			} else if (input === "decMinutes" && timerTime - 60000 >= 0) {
				this.setState({ timerTime: timerTime - 60000 });
			} else if (input === "incSeconds" && timerTime + 1000 < 216000000) {
				this.setState({ timerTime: timerTime + 1000 });
			} else if (input === "decSeconds" && timerTime - 1000 >= 0) {
				this.setState({ timerTime: timerTime - 1000 });
			}
		}
	};

	render() {
		const { timerTime, timerStart, timerOn } = this.state;
		let seconds = ("0" + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2);
		let minutes = ("0" + Math.floor((timerTime / 60000) % 60)).slice(-2);
		let hours = ("0" + Math.floor((timerTime / 3600000) % 60)).slice(-2);

		return (
			<div className="Countdown">
				<div className="Countdown-header">TIMER:</div>
				{/* <div className="Countdown-label">Hours : Minutes : Seconds</div> */}
				<div className="Countdown-display">
					<button onClick={() => this.adjustTimer("incHours")}>
						H &#8679;
					</button>
					<button onClick={() => this.adjustTimer("incMinutes")}>
						M &#8679;
					</button>
					<button onClick={() => this.adjustTimer("incSeconds")}>
						S &#8679;
					</button>

					<div className="Countdown-time">
						{hours} : {minutes} : {seconds}
					</div>

					<button onClick={() => this.adjustTimer("decHours")}>
						H &#8681;
					</button>
					<button onClick={() => this.adjustTimer("decMinutes")}>
						M &#8681;
					</button>
					<button onClick={() => this.adjustTimer("decSeconds")}>
						S &#8681;
					</button>
				</div>

				{timerOn === false && (timerStart === 0 || timerTime === timerStart) && (
					<button className="Button-start" onClick={this.startTimer}>
						Start
					</button>
				)}
				{timerOn === true && timerTime >= 1000 && (
					<button className="Button-stop" onClick={this.stopTimer}>
						Stop
					</button>
				)}
				{timerOn === false &&
					timerStart !== 0 &&
					timerStart !== timerTime &&
					timerTime !== 0 && (
						<button className="Button-start" onClick={this.startTimer}>
							Resume
						</button>
					)}

				{(timerOn === false || timerTime < 1000) &&
					timerStart !== timerTime &&
					timerStart > 0 && (
						<button className="Button-reset" onClick={this.resetTimer}>
							Reset
						</button>
					)}
			</div>
		);
	}
}

export default Countdown;
