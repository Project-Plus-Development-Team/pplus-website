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

  return (
    <Navbar.Container className="has-text-weight-bold">
      <NavLink onClick={foldNavbar} text="Home" href="/" pathname={pathname}/>
      <NavLink onClick={foldNavbar} text="F.A.Q." href="/faq" pathname={pathname}/>
      <Navbar.Item dropdown hoverable href="#">
        <Navbar.Link className={`${styles.navitem} ${activeClass}`}>Changes</Navbar.Link>
        <Navbar.Dropdown>
          {versions.map(version => (
            <NavLink
              onClick={foldNavbar}
              key={version}
              text={`v${version}`}
              href={`/changes/${version}`}
              pathname={pathname}
            />
          ))}
        </Navbar.Dropdown>
      </Navbar.Item>
      <NavLink onClick={foldNavbar} text="Knuckles" href="/knuckles" pathname={pathname}/>
    </Navbar.Container>
  );
}