import React from "react";
import styles from "./Main.module.scss";

import BreadCrumb from "./BreadCrumb/BreadCrumb";
import Sidebar from "./Sidebar/Sidebar";
import Details from "./Content/Details/Details";
import Description from "./Content/Description/Description";
import Reviews from "./Content/Reviews/Reviews";
import Related from "./Content/Related/Related";

const Main = () => {
	return (
		<div className={styles.main}>
			<BreadCrumb />
			<div className={styles.details}>
				<div className={styles.leftSidebar}>
					<Sidebar />
				</div>
				<div className={styles.rightSidebar}>
					<Details />
					<Description />
					<Reviews />
					<Related />
				</div>
			</div>
		</div>
	);
};

export default Main;
