import React from "react";
import styles from "./Reviews.module.scss";
import venu from "../../../../images/venu.jpg";
import talib from "../../../../images/talib.jpeg";

const Reviews = () => {
	return (
		<>
			<div className={styles.reviews}>
				<h3>23 reviews for nudie extendable sofa</h3>
				<div className={styles.ratings}>
					<span>
						<i className={`fas fa-star ${styles.checked}`}></i>
					</span>
					<span>
						<i className={`fas fa-star ${styles.checked}`}></i>
					</span>
					<span>
						<i className={`fas fa-star ${styles.checked}`}></i>
					</span>
					<span>
						<i className={`fas fa-star ${styles.checked}`}></i>
					</span>
					<span>
						<i className={`fas fa-star ${styles.unchecked}`}></i>
					</span>
					<span className={styles.averageReview}> 4.31 </span>
					<span className={styles.reviewCount}>(23 reviews)</span>
				</div>

				<div className={styles.review}>
					<div className={styles.review1}>
						<div className={styles.left}>
							<div className={styles.personImg}>
								<img src={talib} alt="person" />
							</div>
							<div className={styles.personName}>
								<span>Talib Choudhary</span>
								<span>
									March 21<sup>st</sup> 2021
								</span>
							</div>
						</div>
						<div className={styles.right}>
							<p>Excellent</p>
							<div className={styles.rightRatings}>
								<span>
									<i className={`fas fa-star ${styles.checked}`}></i>
								</span>
								<span>
									<i className={`fas fa-star ${styles.checked}`}></i>
								</span>
								<span>
									<i className={`fas fa-star ${styles.checked}`}></i>
								</span>
								<span>
									<i className={`fas fa-star ${styles.checked}`}></i>
								</span>
								<span>
									<i className={`fas fa-star ${styles.unchecked}`}></i>
								</span>
							</div>
							<p className={styles.comment}>
								At vero eos et accusamus et iusto odio dignissimos
								ducimus qui blanditiis praesentium voluptatum deleniti
								atque corrupti quos dolores et quas molestias excepturi
								sint occaecati cupiditate non provident, similique sunt
								in culpa qui officia deserunt mollitia animi, id est
								laborum et dolorum fuga.
							</p>
							<p>Add Comment</p>
						</div>
					</div>
					<div className={styles.review1}>
						<div className={styles.left}>
							<div className={styles.personImg}>
								<img src={venu} alt="person" />
							</div>
							<div className={styles.personName}>
								<span>Venu Sirpuram</span>
								<span>
									May 23<sup>st</sup> 2021
								</span>
							</div>
						</div>
						<div className={styles.right}>
							<p>Excellent</p>
							<div className={styles.rightRatings}>
								<span>
									<i className={`fas fa-star ${styles.checked}`}></i>
								</span>
								<span>
									<i className={`fas fa-star ${styles.checked}`}></i>
								</span>
								<span>
									<i className={`fas fa-star ${styles.checked}`}></i>
								</span>
								<span>
									<i className={`fas fa-star ${styles.checked}`}></i>
								</span>
								<span>
									<i className={`fas fa-star ${styles.unchecked}`}></i>
								</span>
							</div>
							<p className={styles.comment}>
								At vero eos et accusamus et iusto odio dignissimos
								ducimus qui blanditiis praesentium voluptatum deleniti
								atque corrupti quos dolores et quas molestias excepturi
								sint occaecati cupiditate non provident, similique sunt
								in culpa qui officia deserunt mollitia animi, id est
								laborum et dolorum fuga.
							</p>
							<p>Add Comment</p>
						</div>
					</div>
				</div>

				<div className={styles.loadmore}>
					<span>Load more(21)</span>
				</div>
			</div>
		</>
	);
};

export default Reviews;
