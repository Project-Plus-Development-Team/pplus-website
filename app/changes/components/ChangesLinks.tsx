import { faFileAlt, faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { VersionData } from "../changes-types";

interface Props {
	links: VersionData["links"];
}

const getIconDefition = (icon: string) => {
	switch (icon) {
		case "fas fa-file-alt":
			return faFileAlt;
		case "fas fa-music":
			return faMusic;
		default: {
			// TODO update the data format to not even allow custom icons
			throw new Error(`${icon} is not supported for this component.`);
		}
	}
};

export const ChangesLinks = ({ links }: Props) => (
	<div className="buttons">
		{Object.entries(links!).map(([title, { url, icon }], index) => (
			<a key={index} className="button is-link" href={url}>
				{icon !== undefined && (
					<FontAwesomeIcon className="mr-2" icon={getIconDefition(icon)} />
				)}
				<span>{title}</span>
			</a>
		))}
	</div>
);
