import React from "react";
import styles from "./Navbar.module.scss";
import logo from "../../../images/logo.png";

const Navbar = () => {
	return (
		<nav className={styles.navBar}>
			<div className={styles.navbarContent}>
				<div className={styles.navLogo}>
					<img src={logo} alt="logo" />
				</div>
				<div className={styles.navRight}>
					<ul className={styles.navMenu}>
						<li className={styles.navLinks}>
							<a
								href="/#"
								className={`${styles.navText} ${styles.active}`}
							>
								Bedroom
							</a>
						</li>
						<li className={styles.navLinks}>
							<a href="/#" className={styles.navText}>
								Living room
							</a>
						</li>
						<li className={styles.navLinks}>
							<a href="/#" className={styles.navText}>
								Office
							</a>
						</li>
						<li className={styles.navLinks}>
							<a href="/#" className={styles.navText}>
								kitchen
							</a>
						</li>
						<li className={styles.navLinks}>
							<a href="/#" className={styles.navText}>
								bathroom
							</a>
						</li>
					</ul>
					<ul className={styles.iconMenu}>
						<li className={styles.iconList}>
							<i className={`fas fa-search ${styles.icon}`}></i>
						</li>
						<li className={styles.iconList}>
							<i className={`far fa-heart ${styles.icon}`}></i>
						</li>
						<li className={`${styles.iconList} ${styles.bag}`}>
							<div className={styles.bagCount}>
								<span>2</span>
							</div>
							{/* <i className="gg-shopping-bag"></i> */}
							<i className="fas fa-shopping-bag"></i>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
