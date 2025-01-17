import type { ReactNode } from "react";

interface Props {
	visible: ReactNode;
	screenReader: ReactNode;
}

export const A11tySwitch = ({ visible, screenReader }: Props) => (
	<>
		<span aria-hidden>{visible}</span>
		<span className="is-sr-only">{screenReader}</span>
	</>
);
