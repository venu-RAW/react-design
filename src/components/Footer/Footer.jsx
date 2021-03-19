import React from "react";
import styles from "./Footer.module.scss";
import logo from "../../images/footer_logo.png";

const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.footerContainer}>
				<div className={styles.inner}>
					<div className={styles.footerTop}>
						<input
							type="text"
							className={styles.newsletter}
							placeholder="Grab Our Newsletter"
						></input>
					</div>
					<div className={styles.footerBottom}>
						<div className={styles.footerNavLinks}>
							<ul className={styles.footerMenu}>
								<li className={styles.footerLinks}>
									<a
										href="/#"
										className={`${styles.footerText} ${styles.active}`}
									>
										Bedroom
									</a>
								</li>
								<li className={styles.footerLinks}>
									<a href="/#" className={styles.footerText}>
										Living room
									</a>
								</li>
								<li className={styles.footerLinks}>
									<a href="/#" className={styles.footerText}>
										Office
									</a>
								</li>
								<li className={styles.footerLinks}>
									<a href="/#" className={styles.footerText}>
										kitchen
									</a>
								</li>
								<li className={styles.footerLinks}>
									<a href="/#" className={styles.footerText}>
										bathroom
									</a>
								</li>
							</ul>
						</div>
						<div className={styles.footerSocialIcons}>
							<div className={styles.footerLogo}>
								<img src={logo} alt="Footer Logo" />
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
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
