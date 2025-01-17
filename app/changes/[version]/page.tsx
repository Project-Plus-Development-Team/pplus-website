import { Metadata } from "next";
import { AllVersionChanges } from "../components/AllVersionChanges";
import { SingleVersionChanges } from "../components/SingleVersionChanges";
import { getSingleVersionData, getSortedVersions } from "../get-version";

export async function generateStaticParams() {
	const versions = ["all", ...(await getSortedVersions())];

	return versions.map((version) => ({
		version,
	}));
}

type Props = {
	params: Promise<{
		version: string;
	}>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { version } = await params;

	if (version === "all") {
		return {
			title: "Changes from all versions",
			description:
				"View all changes from all Project+ versions automatically combined.",
		};
	}

	return {
		title: `Changes in v${version}`, // TODO
		description:
			"View everything that's been changed in Project+ v${version}",
	};
}

export default async function VersionChangesShared({ params }: Props) {
	const { version } = await params;

	if (version === undefined || Array.isArray(version)) {
		throw new Error(
			"/pages/changes/[version] param unexpectedly undefined"
		);
	}

	if (version === "all") {
		const versions = await getSortedVersions();
		const data = await Promise.all(versions.map(getSingleVersionData));

		return (
			<main data-q="changes">
				<AllVersionChanges data={data} />
			</main>
		);
	}

	const data = await getSingleVersionData(version);

	return (
		<main data-q="changes">
			<SingleVersionChanges data={data} />
		</main>
	);
}
