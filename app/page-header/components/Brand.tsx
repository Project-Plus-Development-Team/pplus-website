"use client";

import { GoodImage } from "app/components/GoodImage";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Dispatch, SetStateAction } from "react";
import logo from "~generated-images/logo.webp";
import { useEgg } from "../use-egg";

interface BrandProps {
	isNavbarActive: boolean;
	setNavbarActive: Dispatch<SetStateAction<boolean>>;
}

export const Brand = ({ isNavbarActive, setNavbarActive }: BrandProps) => {
	const { egg, spin, useAltSpin } = useEgg();
	const isHome = usePathname() === "/";

	// TODO cleanup the following code maybe?

	return (
		<div className="navbar-brand is-marginless">
			<div
				className="navbar-item"
				style={{ paddingTop: 0, paddingBottom: 0 }}
			>
				<Link
					href="/"
					style={{ lineHeight: 1 }}
					title={isHome ? "You're already on the home page" : ""}
					onClick={() => {
						if (isHome) {
							egg();
						}
					}}
					className={
						"logo " + (spin ? `spin${useAltSpin ? 2 : 1}` : "")
					}
				>
					<GoodImage
						img={logo}
						alt="Project Plus Logo" // TODO shrink?
						style={{
							width: 178,
							height: 40,
						}}
					/>
					<style jsx global>{`
						.logo.spin1 {
							transition: transform 3s ease-out;
							transform: rotateZ(6turn);
						}

						.logo.spin2 {
							transition: transform 3s ease-out;
							transform: rotateZ(12turn);
						}
					`}</style>
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
