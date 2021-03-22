import React, { useRef } from "react";
import styles from "./Main.module.scss";

import BreadCrumb from "./BreadCrumb/BreadCrumb";
import Sidebar from "./Sidebar/Sidebar";
import Details from "./Content/Details/Details";
import Description from "./Content/Description/Description";
import Reviews from "./Content/Reviews/Reviews";
import Related from "./Content/Related/Related";

const Main = ({ incrementCart, decrementCart, quantity, setCartCount }) => {
	const details = useRef(null);
	const description = useRef(null);
	const reviews = useRef(null);
	const related = useRef(null);

	const refobj = {
		details,
		description,
		reviews,
		related,
	};

	return (
		<div className={styles.main}>
			<BreadCrumb />
			<div className={styles.details}>
				<div className={styles.leftSidebar}>
					<Sidebar
						// details={details}
						// description={description}
						// reviews={reviews}
						// related={related}
						refobj={refobj}
					/>
				</div>
				<div className={styles.rightSidebar}>
					<Details
						ref={details}
						incrementCart={incrementCart}
						decrementCart={decrementCart}
						quantity={quantity}
						setCartCount={setCartCount}
					/>
					<Description ref={description} />
					<Reviews ref={reviews} />
					<Related ref={related} />
				</div>
			</div>
		</div>
	);
};

export default Main;
