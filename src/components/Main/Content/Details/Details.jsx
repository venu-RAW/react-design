import React from "react";
import styles from "./Details.module.scss";
import sofa1 from "../../../../images/sofa1.jpeg";

const Details = () => {
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
								<span>
									<i className={`fas fa-star ${styles.checked}`}></i>
								</span>
								<span>
									<i className={`fas fa-star ${styles.checked}`}></i>
								</span>
								<span>
									<i className={`fas fa-star ${styles.unchecked}`}></i>
								</span>
								<span>
									<i className={`fas fa-star ${styles.unchecked}`}></i>
								</span>
								<span>
									<i className={`fas fa-star ${styles.unchecked}`}></i>
								</span>
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
										<span>
											<i className="fas fa-minus"></i>
										</span>
										<span className={styles.count}>1</span>
										<span>
											<i className="fas fa-plus"></i>
										</span>
									</div>
									<div className={styles.cartButton}>
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
