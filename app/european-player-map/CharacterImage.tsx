"use client";

import { useState } from "react";
import type { Player } from "./page";

export const CharacterImage = ({
	character,
}: {
	character: Player["character"];
}) => {
	const [error, setError] = useState(false);

	if (error) {
		console.log("error", error);
	}

	// TODO the resources folder is like 10MB large... spritesheet or something..? definitely needs to be converted to webp...
	const src = `/resources/characters/${
		character === null
			? "question-mark"
			: character.name + "/icons/" + String(character.skinIndex)
	}.png`;

	return (
		<img
			src={src}
			loading="lazy"
			style={{
				backgroundColor: error ? "black" : undefined,
				textTransform: "capitalize",
				fontWeight: "bold",
				color: "black",
				textShadow: "0 0 10px white",
				fontSize: "1.2em",
				lineHeight: 0.8,
			}}
			alt={
				character === null
					? "Unknown or missing character"
					: character.name
			}
			width={50}
			onError={console.log}
			onLoad={() => setError(false)} // during dev, it could be that an image has an error but gets loaded after a change
		/>
	);
};
