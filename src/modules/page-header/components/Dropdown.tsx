import { ReactNode } from "react";
import { Navbar } from "react-bulma-components";
import { useDropdownState } from "../hooks/use-dropdown";

import styles from "../PageHeader.module.scss";

interface Props {
  highlighted: boolean;
  children: ReactNode;
  text: string;
  className?: string;
}

export const NavDropdown = ({
  highlighted,
  children,
  text,
  className,
}: Props) => {
  const activeClass = highlighted ? styles.navitemactive : "";

  // [upstream] https://github.com/couds/react-bulma-components/issues/382
  const { active, setActive, linkRef } = useDropdownState();

  return (
    <Navbar.Item href="#">
      <Navbar.Link
        className={`${styles.navitem} ${activeClass} ${className ?? ""}`}
        onClick={(event: MouseEvent) => {
          // prevent the anchor from adding "#" to the browser URL
          event.preventDefault();
          setActive(!active);
        }}
        domRef={linkRef}
        // [a11y] https://github.com/couds/react-bulma-components/issues/383
        renderAs="a" // render as anchor for keyboard navigation / accessibility
        // [a11y] render as button for a11y??
        href="#"
      >
        {text}
      </Navbar.Link>
      <Navbar.Dropdown
        style={{
          display: active ? "block" : "none",
        }}
      >
        {children}
      </Navbar.Dropdown>
    </Navbar.Item>
  );
};
