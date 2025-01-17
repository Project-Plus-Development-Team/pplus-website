import type { Metadata } from "next";
import { NotFoundClient } from "./not-found-client";

export const metadata: Metadata = {
	title: "404 - Page not found",
};

export default function FourOhFour() {
	return (
		<main
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "space-evenly",
				flexWrap: "wrap",
			}}
		>
			<div style={{ maxWidth: 600 }}>
				<h1 className="title">YIKES!</h1>
				<h1 className="subtitle">
					This page could not be found.
					<br />
					Imagine the soothing sound of{" "}
					<a href="https://www.youtube.com/watch?v=vv_x6I1l1mM">
						crashing Project M.
					</a>
				</h1>
				<br />
				<span>
					There&apos;s a high chance this page used to exist, but has
					moved.
					<br />
					A search function to find moved content is in the works, but
					until then you can
					<br />
					<a href="/discord">ask in our Discord server</a> or{" "}
					<a href="https://twitter.com/functiongermany">
						tweet at me
					</a>
					. {/* [a11y] */}
				</span>
			</div>
			<NotFoundClient />
		</main>
	);
}
