import { useRouter } from "next/router";
import React from "react";
import { Container, Navbar } from "react-bulma-components";
import Brand from "./Brand";
import ButtonContainer from "./ButtonContainer";
import LinkContainer from "./LinkContainer";
import styles from "./PageHeader.module.scss";


// Links for the different changes pages. Last entry is used by the download button label.
// Due to limitations of Next.js i can't pull this data dynamically, but i'm looking into it.
// This only affects the PageHeader, nothing else.
const sortedVersions = [ "2.0", "2.11", "2.15", "2.2", "2.26", "2.28", "2.29" ];

export default function PageHeader() {
  const router = useRouter();
  const latestVersion = sortedVersions[sortedVersions.length - 1];
  const [isActive, setActive] = React.useState(false);
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
