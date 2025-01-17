import { type ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

/**
 * Based on https://github.com/couds/react-bulma-components/blob/master/src/components/modal/modal.js
 * (P+ website previously used react-bulma-components but it's not being maintained as of 2025)
 * I've already stripped down the code to only what the P+ page needs but this can
 * certainly be further modernised and shortened.
 */

type Props = {
	show: boolean;
	onClose: () => void;
	children: ReactNode;
};

export const MapModal = ({ children, show, onClose }: Props) => {
	const [portalContainer, setPortalContainer] = useState<HTMLDivElement>();

	useEffect(() => {
		if (!show) {
			return;
		}

		const container = document.createElement("div");
		container.setAttribute("class", "modal-container");
		document.body.appendChild(container);
		setPortalContainer(container);

		const handleKeydown = (evt: KeyboardEvent) => {
			if (evt.code === "Escape" && show) {
				onClose();
			}
		};

		document.addEventListener("keydown", handleKeydown);

		return () => {
			document.removeEventListener("keydown", handleKeydown);
			document.body.removeChild(container);
		};
	}, [show]);

	if (!portalContainer) {
		return null;
	}

	return createPortal(
		<div className={`modal ${show ? "is-active" : ""}`}>
			<div
				role="presentation"
				className="modal-background"
				onClick={onClose}
			/>
			{children}
		</div>,
		portalContainer
	);
};
