import { useRouter } from "next/router";
import React, { Dispatch, SetStateAction } from "react";
import { Section, Container, Navbar } from "react-bulma-components";
import ButtonContainer from "./ButtonContainer";
import LinkContainer from "./LinkContainer";
import styles from "./PageHeader.module.scss";

interface BrandProps {
  isNavbarActive: boolean
  setNavbarActive: Dispatch<SetStateAction<boolean>>
}

function Brand({ isNavbarActive, setNavbarActive }: BrandProps) {
  const handleBurgerClick = () => setNavbarActive(!isNavbarActive);

  return (
    <Navbar.Brand>
      <Navbar.Item renderAs="div" style={{ paddingTop: 0, paddingBottom: 0 }}>
        {/* TODO: figure out how the heck next/image is supposed to work here */}
        <img src="/images/projectplus_logo_small.png" style={{maxHeight: "2.5rem"}}/>
      </Navbar.Item>
      <Navbar.Burger onClick={handleBurgerClick}/>
    </Navbar.Brand>
  );
}

// Links for the different changes pages. Last entry is used by the download button label.
// Due to limitations of Next.js i can't pull this data dynamically, but i'm looking into it.
// This only affects the PageHeader, nothing else.
const sortedVersions = [ "2.0", "2.11", "2.15", "2.2" ];

export default function PageHeader() {
  const router = useRouter();
  const latestVersion = sortedVersions[sortedVersions.length - 1];
  const [isActive, setActive] = React.useState(false);
  const foldNavbar = () => setActive(false);

  return (
    <Section renderAs="header">
      <Container>
        <Navbar color="dark" className={styles.navbar + " pl-3 pr-2"} active={isActive}>
          <Brand isNavbarActive={isActive} setNavbarActive={setActive}/>
          <Navbar.Menu>
            <LinkContainer pathname={router.pathname} versions={sortedVersions} foldNavbar={foldNavbar}/>
            <ButtonContainer latestVersion={latestVersion} foldNavbar={foldNavbar}/>
          </Navbar.Menu>
        </Navbar>
      </Container>
    </Section>
  );
}
