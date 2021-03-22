import React, { useRef, useState, useEffect } from "react";
import styles from "./Sidebar.module.scss";

// 750, 2895, 3615
const Sidebar = (props) => {
	const { refobj } = props;

	const [name, setName] = useState("");
	const links = useRef(null);

	const handleScroll = () => {
		let scrollpos = window.scrollY;
		console.log("scrolltop:", refobj.details.current);

		if (scrollpos >= 1 && scrollpos <= 749) {
			links.current.children[0].classList.add(`${styles.active}`);
			links.current.children[1].classList.remove(`${styles.active}`);
			setName("Details");
		}
		if (scrollpos >= 750) {
			links.current.children[0].classList.remove(`${styles.active}`);
			links.current.children[1].classList.add(`${styles.active}`);
			links.current.children[2].classList.remove(`${styles.active}`);
			setName("Description");
		}
		if (scrollpos >= 2850) {
			links.current.children[1].classList.remove(`${styles.active}`);
			links.current.children[2].classList.add(`${styles.active}`);
			links.current.children[3].classList.remove(`${styles.active}`);
			setName("Reviews");
		}
		if (scrollpos >= 3550) {
			links.current.children[2].classList.remove(`${styles.active}`);
			links.current.children[3].classList.add(`${styles.active}`);
			setName("Related");
		}
	};

	useEffect(() => {
		setName("Details");
		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollTo = (el) => el.scrollIntoView({ behavior: "smooth" });

	return (
		<div className={styles.sidebar}>
			<div className={styles.sidebarLinks}>
				<ul className={styles.sideMenu} ref={links}>
					<li className={`${styles.sideLinks} ${styles.active}`}>
						<p
							className={styles.sideLinkText}
							onClick={() => scrollTo(refobj.details.current)}
						>
							Details
						</p>
					</li>
					<li className={styles.sideLinks}>
						<p
							className={styles.sideLinkText}
							onClick={() => scrollTo(refobj.description.current)}
						>
							Description
						</p>
					</li>
					<li className={styles.sideLinks}>
						<p
							className={styles.sideLinkText}
							onClick={() => scrollTo(refobj.reviews.current)}
						>
							Reviews
						</p>
					</li>
					<li className={styles.sideLinks}>
						<p
							className={styles.sideLinkText}
							onClick={() => scrollTo(refobj.related.current)}
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
				<h3>{name}</h3>
			</div>
		</div>
	);
};

export default Sidebar;
