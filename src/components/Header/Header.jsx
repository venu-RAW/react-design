import React from "react";
import Navbar from "./Navbar/Navbar";
import styles from "./Header.module.scss";

const Header = ({ cartCount }) => {
	return (
		<div className={styles.header}>
			<Navbar cartCount={cartCount} />
		</div>
	);
};

export default Header;
