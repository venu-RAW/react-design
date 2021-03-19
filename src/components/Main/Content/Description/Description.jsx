import React, { useRef, useState } from "react";
import styles from "./Description.module.scss";
import sofa2 from "../../../../images/sofa2.jpg";
import sofa3 from "../../../../images/sofa3.jpg";
import sofa4 from "../../../../images/sofa4.jpg";
import sofaVideo from "../../../../images/sofa.mp4";

const Description = () => {
	const video = useRef(null);
	const [isVideoPlayed, setIsVideoPlayed] = useState(false);

	const playVideo = () => {
		video.current.play();
		setIsVideoPlayed(!isVideoPlayed);
	};

	const pauseVideo = () => {
		video.current.pause();
		setIsVideoPlayed(!isVideoPlayed);
	};

	return (
		<>
			<div className={styles.description1}>
				<div className={styles.descriptionDiv}>
					<p>
						At vero eos et accusamus et iusto odio dignissimos ducimus qui
						blanditiis praesentium voluptatum deleniti atque corrupti quos
						dolores et quas molestias excepturi sint occaecati cupiditate
						non provident, similique sunt in culpa qui officia deserunt
						mollitia animi, id est laborum et dolorum fuga.
					</p>
					<p>
						Et harum quidem rerum facilis est et expedita distinctio. Nam
						libero tempore, cum soluta nobis est eligendi optio cumque
						nihil impedit quo minus id quod maxime placeat facere
						possimus, omnis voluptas assumenda est, omnis dolor
						repellendus.
					</p>
				</div>
				<div className={styles.imageDiv}>
					<img src={sofa2} alt="Sofa 2" />
				</div>
				<div className={styles.headDiv}>
					<h2>At vero eos et accusamus et iusto odio dignissimos.</h2>
				</div>
			</div>
			<div className={styles.description2}>
				<div
					className={styles.videoDiv}
					onClick={() => (isVideoPlayed ? pauseVideo() : playVideo())}
				>
					<video
						src={sofaVideo}
						id="sofaVideo"
						ref={video}
						type="video/mp4"
					/>
				</div>
				<div className={!isVideoPlayed ? styles.videoOverlay : ""}></div>
				<div
					className={!isVideoPlayed ? styles.playOverlay : ""}
					onClick={() => {
						playVideo();
					}}
				>
					<i
						className={`fas fa-play ${isVideoPlayed ? styles.none : ""}`}
					></i>
				</div>
				<div className={styles.videoHeader}>
					<h2>At vero eos et accusamus et iusto odio dignissimos.</h2>
				</div>
			</div>
			<div className={styles.description3}>
				<div className={styles.description3Container}>
					<img src={sofa3} alt="sofa3" />
					<div className={styles.download}>
						<a href="/#">
							<i className="far fa-arrow-alt-circle-down"></i>
							<span>DOWNLOAD PDF</span>
						</a>
					</div>
					<div className={styles.sideImage}>
						<img src={sofa4} alt="Sofa4" />
					</div>
					<div className={styles.sideLine}>
						<span>Suggested accomodation</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default Description;
