"use client";

import woah from "~generated-images/knuckles-woah.webp";
import { GoodImage } from "./components/GoodImage";

// we must split the not-found code because export const metadata
// doesn't work with "use client" which we need for the easter egg
// https://github.com/vercel/next.js/discussions/51002

export const NotFoundClient = () => (
	<GoodImage
		img={woah}
		alt="Knuckles with a surprised 'woah!' expression"
		data-q="woah"
		lazy
		onDragStart={(event) => {
			new Audio("/ohno.ogg").play();
			event.dataTransfer.setData("text/plain", "knux");
		}}
	/>
);
