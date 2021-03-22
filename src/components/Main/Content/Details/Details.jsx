import React, { useState } from "react";
import styles from "./Details.module.scss";
import sofa1 from "../../../../images/sofa1.jpeg";

const Details = ({ incrementCart, decrementCart, quantity, setCartCount }) => {
	const [rating, setRating] = useState(null);
	const [hover, setHover] = useState(null);

	return (
		<>
			<section className={styles.details} id="details">
				<div className={styles.container}>
					<div className={styles.leftDiv}>
						<div className={styles.sofa_1}>
							<img src={sofa1} alt="Sofa_1" />
						</div>
					</div>
					<div className={styles.rightDiv}>
						<div className={styles.rightTop}>
							<h2>Nudie Extendable Sofa for 3 persons.</h2>
							<div className={styles.ratings}>
								{[...Array(5)].map((star, i) => {
									const ratingValue = i + 1;

									return (
										<label key={ratingValue}>
											<input
												type="radio"
												name="rating"
												value={ratingValue}
												onClick={() => setRating(ratingValue)}
											/>
											<i
												className={`fas fa-star ${styles.star} ${
													ratingValue <= (hover || rating)
														? styles.checked
														: styles.unchecked
												}`}
												onMouseEnter={() => setHover(ratingValue)}
												onMouseLeave={() => setHover(null)}
											></i>
										</label>
									);
								})}
								<span className={styles.reviewCount}>(23)</span>
							</div>
							<div className={styles.price}>
								<span className={styles.oldPrice}>$169</span>
								<span className={styles.newPrice}>$149</span>
							</div>
						</div>
						<div className={styles.rightMiddle}>
							<ul>
								<li>
									ASSEMBLY : <span>Carpenter Assembly</span>
								</li>
								<li>
									WARRANTY : <span>12 Months Warrant</span>
								</li>
							</ul>
						</div>
						<div className={styles.rightBottom}>
							<div className={styles.offers}>
								<div className={styles.offersLeft}>
									<span>
										<i className="fas fa-truck"></i>
									</span>
									<p>SAME DAY DISPATCH</p>
								</div>
								<div className={styles.offersRight}>
									<span>
										<i className="fas fa-sync-alt"></i>
									</span>
									<p>EASY - 30 DAY RETURN POLICY</p>
								</div>
							</div>
							<div className={styles.colors}>
								<p>Color:</p>
								<div className={styles.colorScheme}>
									<span></span>
									<span>
										<i className="fas fa-check"></i>
									</span>
									<span></span>
								</div>
								<div className={styles.addToCart}>
									<div className={styles.add}>
										<span onClick={decrementCart}>
											<i className="fas fa-minus"></i>
										</span>
										<span className={styles.count}>{quantity}</span>
										<span onClick={incrementCart}>
											<i className="fas fa-plus"></i>
										</span>
									</div>
									<div
										className={styles.cartButton}
										onClick={() =>
											setCartCount(
												(prevState) => prevState + quantity
											)
										}
									>
										<span>ADD TO CART</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Details;
