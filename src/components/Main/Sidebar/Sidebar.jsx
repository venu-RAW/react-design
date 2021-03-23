import React, { useRef, useEffect } from "react";
import styles from "./Sidebar.module.scss";

const Sidebar = (props) => {
	const { refobj } = props;
	const links = useRef(null);
	const sidename = useRef(null);

	const handleScroll = () => {
		let scrollpos = window.scrollY;

		for (let i = 0; i <= Object.entries(refobj).length - 1; i++) {
			let pos =
				Object.entries(refobj)[i][1].current.offsetHeight +
				Object.entries(refobj)[i][1].current.offsetTop;

			if (pos > scrollpos) {
				for (let link of links.current.children) {
					link.classList.remove(`${styles.active}`);
				}
				links.current.children[i].classList.add(`${styles.active}`);
				sidename.current.innerText = Object.entries(refobj)[i][0];
				break;
			}
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollTo = (el) => {
		el.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div className={styles.sidebar}>
			<div className={styles.sidebarLinks}>
				<ul className={styles.sideMenu} ref={links}>
					<li className={`${styles.sideLinks} ${styles.active}`}>
						<p
							className={styles.sideLinkText}
							onClick={() => scrollTo(refobj.Details.current)}
						>
							Details
						</p>
					</li>
					<li className={styles.sideLinks}>
						<p
							className={styles.sideLinkText}
							onClick={() => scrollTo(refobj.Description.current)}
						>
							Description
						</p>
					</li>
					<li className={styles.sideLinks}>
						<p
							className={styles.sideLinkText}
							onClick={() => scrollTo(refobj.Reviews.current)}
						>
							Reviews
						</p>
					</li>
					<li className={styles.sideLinks}>
						<p
							className={styles.sideLinkText}
							onClick={() => scrollTo(refobj.Related.current)}
						>
							Related
						</p>
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
				<h3 ref={sidename}>Details</h3>
			</div>
		</div>
	);
};

export default Sidebar;
