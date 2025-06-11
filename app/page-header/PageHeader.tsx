"use client";

import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";
import backgroundBanner from "~generated-images/background-banner.webp";
import styles from "./PageHeader.module.scss";
import { Brand } from "./components/Brand";
import { NavLink } from "./components/NavLink";

// https://github.com/vercel/next.js/discussions/36622#discussioncomment-2710539
if (typeof document !== "undefined") {
	// required for not-found.tsx easter egg, see https://stackoverflow.com/a/61821783/9948553
	document.addEventListener("dragover", (event) => event.preventDefault());
}

export const PageHeader = () => {
	const [isActive, setActive] = useState(false);

	const backgroundGradient =
		"repeating-linear-gradient(to bottom, #3e9e91, #2f825e 56px)";

	return (
		<nav
			className={`navbar ${styles.navbar}`}
			role="navigation"
			style={{
				background: `${backgroundGradient}, url(${backgroundBanner.src})`,
				backgroundBlendMode: "color",
			}}
		>
			<Brand isNavbarActive={isActive} setNavbarActive={setActive} />
			<div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
				<div className="navbar-start has-text-weight-bold">
					<NavLink onClick={() => setActive(false)} text="Home" href="/" />
					<NavLink onClick={() => setActive(false)} text="FAQ" href="/faq" />
					<NavLink
						onClick={() => setActive(false)}
						text="Changes"
						href="/changes"
					/>
					<NavLink
						onClick={() => setActive(false)}
						text="Knuckles"
						href="/knuckles"
					/>
					<NavLink
						onClick={() => setActive(false)}
						text="Find Communities"
						href="/find-communities"
					/>
				</div>
				<div className="navbar-end">
					<span className="navbar-item">
						<div className={`buttons is-centered ${styles.buttonContainer}`}>
							<Link
								href="/download"
								className={`button is-link has-text-weight-bold ${styles.expandButton}`}
								onClick={() => setActive(false)}
							>
								<FontAwesomeIcon
									icon={faDownload}
									className="mr-2"
									fixedWidth
								/>
								<span>Download</span>
							</Link>
							<a
								href="/discord"
								className={`button is-discord ${styles.expandButton}`}
							>
								<FontAwesomeIcon icon={faDiscord} className="mr-2" fixedWidth />
								<span>Discord Server</span>
							</a>
						</div>
					</span>
				</div>
			</div>
		</nav>
	);
};
