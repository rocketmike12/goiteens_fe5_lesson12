import { Component } from "react";

import styles from "./Modal.module.scss";

export class Modal extends Component {
	componentDidMount() {
		window.addEventListener("keydown", this.handleKeyDown);
	}

	componentWillUnmount() {
		window.removeEventListener("keydown", this.handleKeyDown);
	}

	handleKeyDown = (e) => {
		if (e.key != "Escape") return;
		if (this.props.hidden) return;

		e.preventDefault();
		this.props.onClose();
	};

	render() {
		return (
			<>
				<div className={`${styles["backdrop"]} ${this.props.hidden ? styles["hidden"] : ""}`}>
					<div className={styles["modal"]}>
						<h2 className={styles["modal__title"]}>modal &#x3e;&#x3a;&#x29;</h2>
						<p className={styles["modal__text"]}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptas dolores consequuntur assumenda repellat, minus dignissimos distinctio sit tempora!
						</p>
						<button className={styles["modal__close-button"]} onClick={this.props.onClose}>
							X
						</button>
					</div>
				</div>
			</>
		);
	}
}
