import React, { useRef, useState } from "react";
import styles from "./Sidebar.module.scss";

const Sidebar = ({ scrollpos }) => {
	console.log("Scroll Position:", scrollpos);
	// 750, 2895, 3615
	const links = useRef(null);

	if (scrollpos >= 1 && scrollpos <= 749) {
		links.current.children[0].classList.add(`${styles.active}`);
		links.current.children[1].classList.remove(`${styles.active}`);
	}
	if (scrollpos >= 750) {
		links.current.children[0].classList.remove(`${styles.active}`);
		links.current.children[1].classList.add(`${styles.active}`);
		links.current.children[2].classList.remove(`${styles.active}`);
	}
	if (scrollpos >= 2850) {
		links.current.children[1].classList.remove(`${styles.active}`);
		links.current.children[2].classList.add(`${styles.active}`);
		links.current.children[3].classList.remove(`${styles.active}`);
	}
	if (scrollpos >= 3550) {
		links.current.children[2].classList.remove(`${styles.active}`);
		links.current.children[3].classList.add(`${styles.active}`);
	}

	return (
		<div className={styles.sidebar}>
			<div className={styles.sidebarLinks}>
				<ul className={styles.sideMenu} ref={links}>
					<li className={`${styles.sideLinks} ${styles.active}`}>
						<a href="/#details" className={styles.sideLinkText}>
							Details
						</a>
					</li>
					<li className={styles.sideLinks}>
						<a href="/#description" className={styles.sideLinkText}>
							Description
						</a>
					</li>
					<li className={styles.sideLinks}>
						<a href="/#reviews" className={styles.sideLinkText}>
							Reviews
						</a>
					</li>
					<li className={styles.sideLinks}>
						<a href="/#related" className={styles.sideLinkText}>
							Related
						</a>
					</li>
				</ul>
			</div>
			<div className={styles.socialIcons}>
				<ul className={styles.iconMenu}>
					<li className={styles.iconLinks}>
						<a href="/#" className={styles.iconText}>
							<i className="fab fa-facebook-f"></i>
						</a>
					</li>
					<li className={styles.iconLinks}>
						<a href="/#" className={styles.iconText}>
							<i className="fab fa-twitter"></i>
						</a>
					</li>
					<li className={styles.iconLinks}>
						<a href="/#" className={styles.iconText}>
							<i className="fab fa-pinterest"></i>
						</a>
					</li>
				</ul>
			</div>
			<div className={styles.option}>
				<h3>Details</h3>
			</div>
		</div>
	);
};

export default Sidebar;
