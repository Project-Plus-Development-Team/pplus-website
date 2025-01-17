"use client";

import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";

import styles from "./YouTubePlayer.module.scss";

interface Props {
	id: string;
	title: string;
}

const useEmbedOverlay = () => {
	const [showEmbedOverlay, setShowEmbedOverlay] = useState(true);
	const wrapperRef = useRef<HTMLDivElement>(null);

	const activateEmbed = () => {
		setShowEmbedOverlay(false);
		const articleElement =
			wrapperRef.current?.querySelector<HTMLElement>(".yt-lite");
		articleElement?.click();
	};

	return {
		showEmbedOverlay,
		activateEmbed,
		wrapperRef,
	};
};

export const YouTubePlayer = ({ id, title }: Props) => {
	const { showEmbedOverlay, activateEmbed, wrapperRef } = useEmbedOverlay();

	return (
		<div className={styles.embed_wrapper} ref={wrapperRef}>
			<button
				className={styles.embed_overlay}
				onClick={activateEmbed}
				style={{
					display: showEmbedOverlay ? "flex" : "none",
					border: "none",
					color: "white",
					fontSize: "6em",
				}}
			>
				<FontAwesomeIcon icon={faPlay} />
				<span className={styles.embed_hover}>
					Click to load YouTube Player
				</span>
			</button>
			<LiteYouTubeEmbed
				title={title}
				poster="maxresdefault"
				id={id}
				wrapperClass={`yt-lite ${styles.embed}`}
				webp
				iframeClass={styles.iframe}
			/>

			<style jsx global>{`
				.${styles.embed}:not(.lyt-activated) {
					padding-bottom: 56.25%;
				}

				.${styles.embed} .lty-playbtn {
					display: none;
				}
			`}</style>
		</div>
	);
};
