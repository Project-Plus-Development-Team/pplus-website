"use client";

import { GoodImage } from "app/components/GoodImage";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Dispatch, SetStateAction } from "react";
import logo from "~generated-images/logo.webp";
import { useEgg } from "../use-egg";
import styles from "../PageHeader.module.scss";
import { getMusicTrack, getVideo } from "./project-wave-utils";

let music: HTMLAudioElement | null = null;
let video: HTMLVideoElement | null;

interface BrandProps {
	isNavbarActive: boolean;
	setNavbarActive: Dispatch<SetStateAction<boolean>>;
}

export const Brand = ({ isNavbarActive, setNavbarActive }: BrandProps) => {
	const { egg, spin, useAltSpin } = useEgg();
	const isHome = usePathname() === "/";

	const toggleWave = () => {
		if (document.documentElement.classList.contains("project-wave")) {
			// toggling project-wave "off" might not work properly in dev due to HMR
			video?.remove();
			music?.pause();
			document.documentElement.classList.remove("project-wave");
			document.documentElement.setAttribute("style", "");
			document.body.setAttribute("style", "");
			return;
		}

		music = new Audio(getMusicTrack());
		music.volume = 0.5;
		music.play();

		if (Math.random() > 0.5) {
			video = getVideo();
			document.body.appendChild(video);
		} else {
			video = null;
		}

		document.documentElement.setAttribute(
			"style",
			"animation: flip 1s ease-out"
		);

		setTimeout(() => {
			document.documentElement.classList.add("project-wave");
		}, 500);

		document.documentElement.addEventListener(
			"animationend",
			() => {
				if (video === null) {
					document.body.setAttribute("style", "");
					document.documentElement.setAttribute(
						"style",
						"background-image: url(/images/generated/project-wave/vaporwave-wallpaper.webp)"
					);
				} else {
					document.documentElement.setAttribute("style", "");
					document.body.setAttribute(
						"style",
						"background: transparent !important"
					);
					video.style.display = "initial";
				}
			},
			{ once: true }
		);
	};

	return (
		<div className="navbar-brand is-marginless">
			<div className="navbar-item" style={{ paddingTop: 0, paddingBottom: 0 }}>
				<Link
					href="/"
					style={{ lineHeight: 1 }}
					title={isHome ? "You're already on the home page" : undefined}
					onClick={isHome ? egg : undefined}
					className={spin ? (useAltSpin ? styles.spin2 : styles.spin1) : ""}
				>
					<GoodImage
						img={logo}
						alt="Project Plus Logo" // TODO shrink?
						style={{
							width: 178,
							height: 40,
						}}
						onDrop={(event) => {
							event.preventDefault();

							if (
								event.dataTransfer?.getData("text/plain") === "knux" &&
								window.confirm("Toggle Project Wave?")
							) {
								toggleWave();
							}
						}}
					/>
				</Link>
			</div>
			<div
				className={`navbar-burger ${isNavbarActive ? "is-active" : ""}`}
				style={{ outline: "none" }}
				role="button"
				onClick={() => setNavbarActive(!isNavbarActive)}
				aria-label="Burger menu toggle"
			>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
	);
};
