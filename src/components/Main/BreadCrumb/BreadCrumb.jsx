import React from "react";
import styles from "./BreadCrumb.module.scss";

const BreadCrumb = () => {
	return (
		<div className={styles.breadCrumb}>
			<div className={styles.breadCrumbContainer}>
				<ul className={styles.breadCrumbMenu}>
					<li className={styles.bLinks}>
						<i className="fas fa-home"></i>
					</li>
					<li className={styles.bLinks}>
						<i className={`fas fa-caret-right ${styles.arrow}`}></i>
					</li>
					<li className={styles.bLinks}>catalog</li>
					<li className={styles.bLinks}>
						<i className={`fas fa-caret-right ${styles.arrow}`}></i>
					</li>
					<li className={styles.bLinks}>sofas</li>
					<li className={styles.bLinks}>
						<i className={`fas fa-caret-right ${styles.arrow}`}></i>
					</li>
					<li className={styles.bLinks}>beige nudie sofa</li>
				</ul>
			</div>
		</div>
	);
};

export default BreadCrumb;
