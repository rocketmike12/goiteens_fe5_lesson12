import { Component } from "react";

import { Modal } from "./components/Modal/Modal";

import styles from "./App.module.scss";

class App extends Component {
	constructor() {
		super();

		this.state = { hidden: true };
	}

	openModal = () => {
		this.setState({
			hidden: false
		});
	};

	closeModal = () => {
		this.setState({
			hidden: true
		});
	};

	render() {
		return (
			<>
				<div className={styles["container"]}>
					<button className={styles["open-button"]} onClick={this.openModal}>
						open modal
					</button>
					<Modal hidden={this.state.hidden} onClose={this.closeModal} />
				</div>
			</>
		);
	}
}

export default App;
