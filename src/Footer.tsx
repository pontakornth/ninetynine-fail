import { Component } from "solid-js";
import styles from "./Footer.module.css";

const Footer: Component = () => {
	return (
		<footer class={styles.footer}>
			<p>
				Built by Pontakorn &nbsp;
				<a href="https://github.com/pontakornth">GitHub: pontakornth</a>
			</p>
			<p>
				<a href="https://github.com/pontakornth/ninetynine-fail/">Source</a>
			</p>
		</footer>
	)
}

export default Footer;