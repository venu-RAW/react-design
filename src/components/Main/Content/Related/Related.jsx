import React, { forwardRef } from "react";
import styles from "./Related.module.scss";

import first from "../../../../images/bamboofibergobo.jpg";
import second from "../../../../images/Silver Chair.jpg";
import third from "../../../../images/LapalmaJeyTable.jpg";
import fourth from "../../../../images/Table Lampala.jpg";
import fifth from "../../../../images/Suprematic-Genke-Vase.jpg";
import sixth from "../../../../images/Suprematic-Lighting.jpg";
import seventh from "../../../../images/TheSmallFairbanksSideboard.jpg";
import eighth from "../../../../images/upsidedownconeflowerpottabel.jpg";

const Related = (props, ref) => {
	return (
		<section className={styles.relatedContainer} id="related" ref={ref}>
			<p className={styles.heading}>Related Products</p>
			<div className={styles.related}>
				<div className={styles.product}>
					<div className={styles.productImg}>
						<img src={fifth} alt="Suprematic Genke Vase" />
					</div>
					<div className={styles.productName}>
						<span className={styles.name}>Suprematic Genke Vase</span>
						<div className={styles.price}>
							<span className={styles.oldPrice}>$169</span>
							<span className={styles.newPrice}>$149</span>
						</div>
					</div>
				</div>
				<div className={styles.product}>
					<div className={styles.productImg}>
						<img src={first} alt="Bamboo Fiber Gobo" />
					</div>
					<div className={styles.productName}>
						<p className={styles.name}>Bamboo Fiber Gobo</p>
						<div className={styles.price}>
							<span className={styles.oldPrice}>$169</span>
							<span className={styles.newPrice}>$149</span>
						</div>
					</div>
				</div>
				<div className={styles.product}>
					<div className={styles.productImg}>
						<img src={second} alt="Silver Chair" />
					</div>
					<div className={styles.productName}>
						<span className={styles.name}>Silver Chair</span>
						<div className={styles.price}>
							<span className={styles.oldPrice}>$169</span>
							<span className={styles.newPrice}>$149</span>
						</div>
					</div>
				</div>
				<div className={styles.product}>
					<div className={styles.productImg}>
						<img src={third} alt="Lapalma Jey Table" />
					</div>
					<div className={styles.productName}>
						<span className={styles.name}>Lapalma Jey Table</span>
						<div className={styles.price}>
							<span className={styles.oldPrice}>$169</span>
							<span className={styles.newPrice}>$149</span>
						</div>
					</div>
				</div>
				<div className={styles.product}>
					<div className={styles.productImg}>
						<img src={fourth} alt="Table Lampala" />
					</div>
					<div className={styles.productName}>
						<span className={styles.name}>Table Lampala</span>
						<div className={styles.price}>
							<span className={styles.oldPrice}>$169</span>
							<span className={styles.newPrice}>$149</span>
						</div>
					</div>
				</div>
				<div className={styles.product}>
					<div className={styles.productImg}>
						<img src={seventh} alt="Small Fair Sideboard" />
					</div>
					<div className={styles.productName}>
						<span className={styles.name}>Small Fair Sideboard</span>
						<div className={styles.price}>
							<span className={styles.oldPrice}>$169</span>
							<span className={styles.newPrice}>$149</span>
						</div>
					</div>
				</div>
				<div className={styles.product}>
					<div className={styles.productImg}>
						<img src={eighth} alt="Upside Down Cone Flowerpot" />
					</div>
					<div className={styles.productName}>
						<span className={styles.name}>
							Upside Down Cone Flowerpot
						</span>
						<div className={styles.price}>
							<span className={styles.oldPrice}>$169</span>
							<span className={styles.newPrice}>$149</span>
						</div>
					</div>
				</div>
				<div className={styles.product}>
					<div className={styles.productImg}>
						<img src={sixth} alt="Suprematic Lighting" />
					</div>
					<div className={styles.productName}>
						<span className={styles.name}>Suprematic Lighting</span>
						<div className={styles.price}>
							<span className={styles.oldPrice}>$169</span>
							<span className={styles.newPrice}>$149</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default forwardRef(Related);
