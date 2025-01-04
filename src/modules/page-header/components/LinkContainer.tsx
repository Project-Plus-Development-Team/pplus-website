import { Navbar } from "react-bulma-components";
import styles from "../PageHeader.module.scss";
import { NavDropdown } from "./Dropdown";
import { NavLink } from "./NavLink";

interface LinkContainerProps {
  pathname: string;
  foldNavbar: () => void;
}

export const LinkContainer = ({
  pathname,
  foldNavbar,
}: LinkContainerProps) => (
  <Navbar.Container className="has-text-weight-bold">
    <NavLink onClick={foldNavbar} text="Home" href="/" pathname={pathname} />
    <NavLink
      onClick={foldNavbar}
      text="F.A.Q."
      href="/faq"
      pathname={pathname}
    />
    <NavLink
      onClick={foldNavbar}
      text="Changes"
      href="/changes"
      pathname={pathname}
    />
    <NavLink
      onClick={foldNavbar}
      text="Knuckles"
      href="/knuckles"
      pathname={pathname}
    />
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
  </Navbar.Container>
);
