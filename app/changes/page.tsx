// Links for the different changes pages.
// Due to limitations of Next.js i can't pull this data dynamically, but i'm looking into it.

import { NavLink } from "../page-header/components/NavLink";

// This only affects /changes/ (index), nothing else.
const sortedVersions = [
	"3.0.5",
	"3.0.2",
	"3.0.1",
	"2.5.2",
	"2.4.2",
	"2.4.1",
	"2.3.2",
	"2.3.1",
	"2.29",
	"2.28",
	"2.26",
	"2.2",
	"2.15",
	"2.11",
	"2.0",
];

export default function Changes() {
	return (
		<main style={{ padding: "1.5rem" }}>
			<h1 className="title">Changes</h1>
			<NavLink text="All changes accumulated" href="/changes/all" />
			{sortedVersions.map((version, index) => (
				<NavLink
					key={version}
					text={`v${version}` + (index == 0 ? " (newest)" : "")}
					href={`/changes/${version}`}
				/>
			))}
		</main>
	);
}
