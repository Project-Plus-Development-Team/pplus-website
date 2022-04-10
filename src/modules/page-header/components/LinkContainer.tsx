import { Navbar } from "react-bulma-components";
import { useDropdownState } from "../hooks/use-dropdown";
import { NavLink } from "./NavLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitch } from "@fortawesome/free-brands-svg-icons";

import styles from "../PageHeader.module.scss";

interface LinkContainerProps {
  pathname: string
  versions: string[]
  foldNavbar: () => void
}

export const LinkContainer = ({
  pathname, versions, foldNavbar
}: LinkContainerProps) => {
  const isChangesActive = pathname.split("/")[1] === "changes";
  const activeClass = isChangesActive ? styles.navitemactive : "";

  // TODO https://github.com/couds/react-bulma-components/issues/382
  const { active, setActive, linkRef } = useDropdownState();

  return (
    <Navbar.Container className="has-text-weight-bold">
      <NavLink onClick={foldNavbar} text="Home" href="/" pathname={pathname}/>
      <NavLink onClick={foldNavbar} text="F.A.Q." href="/faq" pathname={pathname}/>
      <Navbar.Item href="#">
        <Navbar.Link
          className={`${styles.navitem} ${activeClass}`}
          onClick={(event: MouseEvent) => {
            // prevent the anchor from adding "#" to the browser URL
            event.preventDefault();
            setActive(!active);
          }}
          domRef={linkRef}
          // TODO https://github.com/couds/react-bulma-components/issues/383
          renderAs="a" // render as anchor for keyboard navigation / accessibility
          href="#"
        >
          Changes
        </Navbar.Link>
        <Navbar.Dropdown
          style={{
            display: active ? "block" : "none"
          }}
        >
          <NavLink
            onClick={foldNavbar}
            text="All changes"
            href="/changes/all"
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
      <NavLink
        onClick={foldNavbar}
        text="Knuckles"
        href="/knuckles"
        pathname={pathname}
      />
      <NavLink
        onClick={foldNavbar}
        text="Find Communities"
        href="/find-communities"
        pathname={pathname}
      />
      <NavLink
        onClick={foldNavbar}
        text={(
          <FontAwesomeIcon
            icon={faTwitch}
            style={{ fontSize: "1.5em" }}
          />
        )}
        title="Watch Twitch streams of P+ and other mods!"
        href="/watch/streams"
        pathname={pathname}
        className="has-new"
      />
      {/* <a className={`navbar-item ${styles.navitem}`} href="https://sf.vods.co/projectm">Watch P+</a> */}
    </Navbar.Container>
  );
};