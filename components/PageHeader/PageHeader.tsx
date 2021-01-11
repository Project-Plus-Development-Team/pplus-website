import Link from "next/link";
import { useRouter } from "next/router";
import React, { Dispatch, SetStateAction } from "react";
import { Container, Navbar } from "react-bulma-components";
import SmartImage from "../smart-image";
import ButtonContainer from "./ButtonContainer";
import LinkContainer from "./LinkContainer";
import styles from "./PageHeader.module.scss";

interface BrandProps {
  isNavbarActive: boolean
  setNavbarActive: Dispatch<SetStateAction<boolean>>
  isHome: boolean
}

function Brand({ isNavbarActive, setNavbarActive, isHome }: BrandProps) {
  const handleBurgerClick = () => setNavbarActive(!isNavbarActive);

  const [eggCounter, setEggCounter] = React.useState(1);
  const [spin, setSpin] = React.useState(false);

  function egg() {
    if (!isHome) {
      return;
    }

    if (eggCounter >= 7) {
      setEggCounter(0);
      setSpin(true);

      setTimeout(() => {
        setSpin(false);
      }, 500);

      return;
    }

    setEggCounter(eggCounter + 1);
  }

  // TODO cleanup the following code maybe?

  return (
    <Navbar.Brand style={{margin: 0}}>
      <Navbar.Item renderAs="div" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <Link href="/">
          <a
            style={{lineHeight: "17px"}}
            title={isHome ? "You're already on the home page" : ""}
            onClick={egg}
            className={"logo " + (spin ? "spin" : "")}
          >
            <SmartImage
              img={require("../../public/images/logo.png?size=178")}
              webp={require("../../public/images/logo.png?size=178&webp")}
            />
          
            <style jsx global>{`            
              .logo.spin {
                transition: transform 0.5s ease-in-out;
                transform: rotateZ(360deg);
              }
            `}</style>
          </a>
        </Link>
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
  const [isActive, setActive] = React.useState(true);
  const foldNavbar = () => setActive(false);

  const backgroundGradient = `
    repeating-linear-gradient(
      to bottom,
      #35dcc5,
      #34d171 56px
    )
  `;

  const backgroundImagePath = require("../../public/images/background-banner.png?webp");
  const isHome = router.pathname === "/";


  return (
    <Container renderAs="header">
      <Navbar color="dark" className={styles.navbar} active={isActive}
        style={{
          background: `${backgroundGradient}, url(${backgroundImagePath}) !important`,
          backgroundBlendMode: "color"
        }}
      >
        <Brand
          isNavbarActive={isActive}
          setNavbarActive={setActive}
          isHome={isHome}
        />
        <Navbar.Menu>
          <LinkContainer
            pathname={router.pathname}
            versions={sortedVersions}
            foldNavbar={foldNavbar}
          />
          <ButtonContainer
            latestVersion={latestVersion}
            foldNavbar={foldNavbar}
          />
        </Navbar.Menu>
      </Navbar>
    </Container>
  );
}
