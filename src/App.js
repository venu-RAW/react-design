import React, { useState } from "react";
import styles from "./App.module.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

const App = () => {
	// cart
	const [quantity, setQuantity] = useState(1);
	const [cartCount, setCartCount] = useState(0);

	const incrementCart = () => {
		setQuantity(quantity + 1);
	};

	const decrementCart = () => {
		if (quantity > 1) setQuantity(quantity - 1);
	};

	return (
		<div className={styles.app}>
			<Header cartCount={cartCount} />
			<Main
				incrementCart={incrementCart}
				decrementCart={decrementCart}
				quantity={quantity}
				setCartCount={setCartCount}
			/>
			<Footer />
		</div>
	);
};

export default App;
