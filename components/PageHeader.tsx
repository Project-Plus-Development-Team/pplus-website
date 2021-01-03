import Link from "next/link";
import { useRouter } from "next/router";
import { Section, Container, Navbar, Button, Icon } from "react-bulma-components";
// import { getVersions } from "../lib/changes";
import styles from "./PageHeader.module.scss";

function NavLink({ text, href, pathname }) {
  const isActive = href === (pathname || "/");
  const activeClass = isActive ? styles.navitemactive : "";

  return (
    <Link href={href}>
      <Navbar.Item
        renderAs="a"
        className={`${styles.navitem} ${activeClass}`}
      >
        {text}
      </Navbar.Item>
    </Link>
  );
}

function Brand() {
  return (
    <Navbar.Brand>
      <Navbar.Item renderAs="div" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <img src="/images/projectplus_logo_small.png" style={{maxHeight: "2.5rem"}}/>
      </Navbar.Item>
      <Navbar.Burger/>
    </Navbar.Brand>
  );
}

interface LinkContainerProps {
  pathname: string
}

const versions = [ "2.0", "2.11", "2.15", "2.2" ]; // <- specify these from oldest to newest

function LinkContainer({ pathname }: LinkContainerProps) {
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
    </Navbar.Container>
  );
}

function ButtonContainer() {
  return (
    <Navbar.Container position="end">
      <Navbar.Item renderAs="div"> {/* <a> is default and gets an ugly shadow */}
        <div className="field is-grouped">
          <div className="control">
            <Link href="/download">
              <Button color="link" className="has-text-weight-bold">
                <Icon>
                  <span className="fas fa-download"/>
                </Icon>
                <span>Download v2.2</span>
              </Button>
            </Link>
          </div>
          <div className="control">
            <a href="/discord">
              <Button color="link" className={styles.discordbutton}>
                <Icon>
                  <span className="fab fa-discord"/>
                </Icon>
                <span>Discord Server</span>
              </Button>
            </a>
          </div>
        </div>
      </Navbar.Item>
    </Navbar.Container>
  );
}

export default function PageHeader() {
  const router = useRouter();

  return (
    <Section renderAs="header">
      <Container>
        <Navbar color="dark" className={styles.navbar + " pl-3 pr-2"}>
          <Brand/>
          <Navbar.Menu>
            <LinkContainer pathname={router.pathname}/>
            <ButtonContainer/>
          </Navbar.Menu>
        </Navbar>
      </Container>
    </Section>
  );
}
