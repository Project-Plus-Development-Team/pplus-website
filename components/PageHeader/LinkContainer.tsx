import { useState } from "react";
import { Navbar } from "react-bulma-components";
import NavLink from "./NavLink";
import styles from "./PageHeader.module.scss";

interface LinkContainerProps {
  pathname: string
  versions: string[]
  foldNavbar: () => void
}

export default function LinkContainer({ pathname, versions, foldNavbar }: LinkContainerProps) {
  const isChangesActive = pathname.split("/")[1] === "changes";
  const activeClass = isChangesActive ? styles.navitemactive : "";
  const [changesDropdown, setChangesDropdown] = useState(false);

  return (
    <Navbar.Container className="has-text-weight-bold">
      <NavLink onClick={foldNavbar} text="Home" href="/" pathname={pathname}/>
      <NavLink className="has-new" onClick={foldNavbar} text="F.A.Q." href="/faq" pathname={pathname}/>
      <Navbar.Item href="#">
        <Navbar.Link
          className={`${styles.navitem} ${activeClass}`}
          onClick={() => setChangesDropdown(!changesDropdown)}
        >
          Changes
        </Navbar.Link>
        <Navbar.Dropdown style={{ display: changesDropdown ? "block" : "none" }}>
          <NavLink
            className="has-new"
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
        text="Find communities"
        href="/find-communities"
        pathname={pathname}
        className="has-new"
      />
      {/* <a className={`navbar-item ${styles.navitem}`} href="https://sf.vods.co/projectm">Watch P+</a> */}
    </Navbar.Container>
  );
}