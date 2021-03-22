import React, { useState, useEffect } from "react";
import styles from "./Main.module.scss";

import BreadCrumb from "./BreadCrumb/BreadCrumb";
import Sidebar from "./Sidebar/Sidebar";
import Details from "./Content/Details/Details";
import Description from "./Content/Description/Description";
import Reviews from "./Content/Reviews/Reviews";
import Related from "./Content/Related/Related";

const Main = ({ incrementCart, decrementCart, quantity, setCartCount }) => {
	// scroll
	const [scrollpos, setscrollpos] = useState(0);

	const handleScroll = () => {
		setscrollpos(window.scrollY);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className={styles.main}>
			<BreadCrumb />
			<div className={styles.details}>
				<div className={styles.leftSidebar}>
					<Sidebar scrollpos={scrollpos} />
				</div>
				<div className={styles.rightSidebar}>
					<Details
						incrementCart={incrementCart}
						decrementCart={decrementCart}
						quantity={quantity}
						setCartCount={setCartCount}
					/>
					<Description />
					<Reviews />
					<Related />
				</div>
			</div>
		</div>
	);
};

export default Main;
