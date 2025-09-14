import { Component } from "react";

import { Modal } from "./components/Modal/Modal";

import styles from "./App.module.scss";

class App extends Component {
	constructor() {
		super();

		this.state = { modalOpen: false, timeStart: Date.now(), time: 0 };
	}

	startTimer = () => {
		this.timerId = setInterval(() => {
			this.setState({ time: Date.now() - this.state.timeStart });
		}, 10);
	};

	stopTimer = () => {
		clearInterval(this.timerId);
	};

	openModal = () => {
		this.setState({
			modalOpen: true,
			timeStart: Date.now() - this.state.time
		});
	};

	closeModal = (e) => {
		if ((e.type === "click" && ((e.currentTarget.id === "backdrop" && e.target.id !== "closeBtn") || e.currentTarget.id === "closeBtn")) || e.type === "keydown") {
			this.setState({
				modalOpen: false
			});
		}
	};

	render() {
		return (
			<>
				<div className={styles["container"]}>
					<button className={styles["open-button"]} onClick={this.openModal}>
						open modal
					</button>
					{this.state.modalOpen && <Modal onClose={this.closeModal} startTimer={this.startTimer} stopTimer={this.stopTimer} />}
					<p className={styles["timer"]}>time looked: {(this.state.time / 1000).toFixed(3)}s</p>
				</div>
			</>
		);
	}
}

export default App;
