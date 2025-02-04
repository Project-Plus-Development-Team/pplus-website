import type { Metadata } from "next";
import "./fontawesome";
import "./global-styles/global.scss";
import { PageHeader } from "app/page-header/PageHeader";
import "./project-wave-easter-egg.scss";

export const metadata: Metadata = {
	title: "Project+",
	description:
		"Project+ is a balance patch for Project M, a popular Super Smash Bros. Brawl mod",
	openGraph: {
		type: "website",
		images: [
			{
				url: "/images/generated/favicon.webp",
				alt: "Project+ Logo",
				width: 128,
				height: 128,
			},
		],
	},
	authors: [
		{
			name: "waffeln aka. Function",
			url: "https://github.com/FunctionDJ",
		},
	],
	icons: [
		{
			rel: "apple-touch-icon",
			sizes: "120x120",
			url: "/apple-touch-icon.png?v2=dLXjO2Kp56",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "16x16",
			url: "/favicon-16x16.png?v2=dLXjO2Kp56",
		},
		{
			rel: "shortcut icon",
			url: "/favicon.ico?v2=dLXjO2Kp56",
		},
	],
	manifest: "/site.webmanifest?v2=dLXjO2Kp56",
	metadataBase: new URL("https://projectplusgame.com"),
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="is-flex is-justify-content-center">
			<body className="container is-flex is-flex-direction-column">
				<header className="is-flex-direction-column">
					<PageHeader />
				</header>
				{children}
			</body>
		</html>
	);
}
