import React from "react";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
	return (
		<div className={styles.sidebar}>
			{/* <div className={styles.sidebarContainer}> */}
			<div className={styles.sidebarLinks}>
				<ul className={styles.sideMenu}>
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
			{/* </div> */}
		</div>
	);
};

export default Sidebar;
