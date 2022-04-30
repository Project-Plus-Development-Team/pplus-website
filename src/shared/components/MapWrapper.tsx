import { ReactNode } from "react";

import styles from "./MapWrapper.module.scss";

interface Props {
  children: ReactNode;
}

export const MapWrapper = ({ children }: Props) => (
  <div className={styles.wrapper}>
    {children}
    <div className={styles.scroll_area}>
      <span style={{ fontSize: "1.5em" }}>«</span>
      <span>Scroll here for touch devices</span>
      <span style={{ fontSize: "1.5em" }}>»</span>
    </div>
  </div>
);
