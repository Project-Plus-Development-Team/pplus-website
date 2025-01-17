import type { MouseEventHandler } from "react";
import { Marker } from "react-simple-maps";
import type { Region } from "../map-types";

interface Props {
	region: Region;
	onClick: () => void;
	dynamicScalingFactor: number;
	zoom: number;
	isDesktop: boolean;
}

const textToNumber = (text: string) => {
	const encoded = btoa(encodeURIComponent(text));

	let sum = 0;
	for (let i = 0; i < encoded.length; i++) {
		sum += encoded.charCodeAt(i);
	}

	return Math.floor(sum);
};

export const RegionComponent = ({
	region,
	onClick,
	zoom,
	dynamicScalingFactor,
	isDesktop,
}: Props) => {
	const { name, coordinates, showThreshold } = region;
	const fontFactor = 16 / zoom + (!isDesktop ? 0.5 : 0);
	const hue = (textToNumber(name) % 100) + 120;
	const brightness = (textToNumber(name) % 5) * 5 + 60;
	const hasSubtitle = region.subtitle.trim() !== "";

	const clickHandler: MouseEventHandler = (event) => {
		event.preventDefault(); // don't add "#" to URL from anchor event
		onClick();
	};

	return (
		<Marker
			key={name}
			coordinates={[coordinates!.longitude, coordinates!.latitude]}
		>
			<a
				onClick={clickHandler}
				style={{
					filter: "drop-shadow(0 .5px .2px black)",
				}}
				href="#"
				aria-label={`Click to open the details of the ${name} community`}
			>
				<circle
					r={3 * dynamicScalingFactor}
					fill={`hsl(${hue}, 100%, ${brightness}%)`}
				/>
				<text
					textAnchor="middle"
					y={0.8 * fontFactor + 5 * dynamicScalingFactor}
					fontSize={fontFactor}
					style={{
						fill: `hsl(${hue}, 100%, 90%)`,
						display: zoom > showThreshold ? "inherit" : "none",
					}}
				>
					{name}
				</text>
				{hasSubtitle && (
					<text
						textAnchor="middle"
						y={0.8 * fontFactor + 8 * dynamicScalingFactor}
						fontSize={fontFactor * 0.7}
						style={{
							fill: `#ccc`,
							display: zoom > showThreshold ? "inherit" : "none",
						}}
					>
						{region.subtitle}
					</text>
				)}
			</a>
		</Marker>
	);
};
