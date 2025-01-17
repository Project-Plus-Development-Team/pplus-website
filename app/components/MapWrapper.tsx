import { ReactNode } from "react";
import styles from "../components/MapWrapper.module.scss";

export const MapWrapper = ({ children }: { children: ReactNode }) => (
	<div className={styles.wrapper}>
		{children}
		<div className={styles.scroll_area}>
			<span style={{ fontSize: "1.5em" }}>«</span>
			<span>Scroll here for touch devices</span>
			<span style={{ fontSize: "1.5em" }}>»</span>
		</div>
	</div>
);
