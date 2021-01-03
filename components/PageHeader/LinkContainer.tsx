import { Navbar } from "react-bulma-components";
import NavLink from "./NavLink";
import styles from "./PageHeader.module.scss";

interface LinkContainerProps {
  pathname: string
}

const versions = [ "2.0", "2.11", "2.15", "2.2" ];

export default function LinkContainer({ pathname }: LinkContainerProps) {
  const isChangesActive = pathname.split("/")[1] === "changes";
  const activeClass = isChangesActive ? styles.navitemactive : "";

  return (
    <Navbar.Container className="has-text-weight-bold">
      <NavLink text="Home" href="/" pathname={pathname}/>
      <NavLink text="F.A.Q." href="/faq" pathname={pathname}/>
      <Navbar.Item dropdown hoverable href="#">
        <Navbar.Link className={`${styles.navitem} ${activeClass}`}>Changes</Navbar.Link>
        <Navbar.Dropdown>
          {versions.map(version => (
            <NavLink key={version} text={version} href={`/changes/${version}`} pathname={pathname}/>
          ))}
        </Navbar.Dropdown>
      </Navbar.Item>
      <NavLink text="Knuckles" href="/knuckles" pathname={pathname}/>
      <NavLink text="Download" href="/download" pathname={pathname}/>
    </Navbar.Container>
  );
}