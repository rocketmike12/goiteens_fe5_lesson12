import { Component } from "react";

import styles from "./Modal.module.scss";

export class Modal extends Component {
	componentDidMount() {
		window.addEventListener("keydown", this.handleKeyDown);
		this.props.startTimer();
	}

	componentWillUnmount() {
		window.removeEventListener("keydown", this.handleKeyDown);
		this.props.stopTimer();
	}

	handleKeyDown = (e) => {
		e.preventDefault();
		this.props.onClose(e);
	};

	render() {
		return (
			<>
				<div className={styles["backdrop"]} id="backdrop" onClick={this.handleKeyDown}>
					<div className={styles["modal"]}>
						<h2 className={styles["modal__title"]}>modal &#x3e;&#x3a;&#x29;</h2>
						<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2baFzl8CM7QekwU0V2nSh20rQX9vAgugpMw&s" className={styles["modal__img"]} />
						<button className={styles["modal__close-button"]} id="closeBtn" onClick={this.handleKeyDown}>
							X
						</button>
					</div>
				</div>
			</>
		);
	}
}
