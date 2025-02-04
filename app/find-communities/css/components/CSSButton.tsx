import { GoodImage } from "app/components/GoodImage";
import type { MouseEventHandler } from "react";
import type { CSSCharacter } from "../css-types";

import images from "~image-indexes/css";

interface Props {
	character: CSSCharacter;
	randomHandler: MouseEventHandler;
}

export const CSSButton = ({ character, randomHandler }: Props) => {
	if (!(character.img in images)) {
		throw new Error(`Couldn't find ${character.name} in generated CSS images`);
	}

	const image = images[character.img as keyof typeof images];

	const imageElement = image && (
		<GoodImage img={image} alt={character.name} aria-hidden lazy />
	);

	if (character.isRandom) {
		return (
			<button
				onClick={randomHandler}
				title="Random Discord"
				style={{
					// @ts-ignore
					"--meta": `url(/images/generated/project-wave/css/${character.img}.webp)`,
				}}
			>
				{imageElement}
				<span className="is-sr-only">Random Character Discord</span>
			</button>
		);
	}

	return (
		<a
			href={`https://discord.com/invite/${character.discordInviteId}`}
			style={{
				// @ts-ignore
				"--meta": `url(/images/generated/project-wave/css/${character.img}.webp)`,
			}}
		>
			{imageElement}
			<span className="is-sr-only">{character.name} Discord</span>
		</a>
	);
};
