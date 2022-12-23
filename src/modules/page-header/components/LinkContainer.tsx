import { Navbar } from "react-bulma-components";
import { useDropdownState } from "../hooks/use-dropdown";
import { NavLink } from "./NavLink";

import styles from "../PageHeader.module.scss";
import { NavDropdown } from "./Dropdown";

interface LinkContainerProps {
  pathname: string;
  versions: string[];
  foldNavbar: () => void;
}

export const LinkContainer = ({
  pathname,
  versions,
  foldNavbar,
}: LinkContainerProps) => {
  const isChangesActive = pathname.split("/")[1] === "changes";
  const activeClass = isChangesActive ? styles.navitemactive : "";

  // [upstream] https://github.com/couds/react-bulma-components/issues/382
  const { active, setActive, linkRef } = useDropdownState();

  return (
    <Navbar.Container className="has-text-weight-bold">
      <NavLink onClick={foldNavbar} text="Home" href="/" pathname={pathname} />
      <NavLink
        onClick={foldNavbar}
        text="F.A.Q."
        href="/faq"
        pathname={pathname}
      />
      <Navbar.Item href="#">
        <Navbar.Link
          className={`${styles.navitem} ${activeClass}`}
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
          Changes
        </Navbar.Link>
        <Navbar.Dropdown
          style={{
            display: active ? "block" : "none",
          }}
        >
          <NavLink
            onClick={foldNavbar}
            text="All changes"
            href="/changes/all"
            pathname={pathname}
          />
          <NavLink
            onClick={foldNavbar}
            text="Knuckles"
            href="/knuckles"
            pathname={pathname}
          />
          {versions.map((version, index) => {
            const isLast = index === versions.length - 1;

            return (
              <NavLink
                onClick={foldNavbar}
                key={version}
                text={`v${version}` + (isLast ? " (newest)" : "")}
                href={`/changes/${version}`}
                pathname={pathname}
              />
            );
          })}
        </Navbar.Dropdown>
      </Navbar.Item>
      <NavDropdown highlighted={false} text="Community">
        <NavLink
          onClick={foldNavbar}
          text="Find Communities"
          href="/find-communities"
          pathname={pathname}
        />
        <NavLink
          onClick={foldNavbar}
          text="European Player Map"
          href="/european-player-map"
          pathname={pathname}
        />
      </NavDropdown>
      <NavDropdown highlighted={false} text="Watch">
        <NavLink
          onClick={foldNavbar}
          text="Watch Twitch streams of P+ and other mods"
          href="/watch/streams"
          pathname={pathname}
        />
        <a
          className={`navbar-item ${styles.navitem}`}
          href="https://sf.vods.co/projectm"
        >
          Watch P+ and PM VODs
        </a>
      </NavDropdown>
      <NavLink
        onClick={foldNavbar}
        className="has-new"
        text="Learn"
        href="/learn"
        pathname={pathname}
      />
    </Navbar.Container>
  );
};
