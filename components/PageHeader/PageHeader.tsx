import { useRouter } from "next/router";
import { useState } from "react";
import { Container, Navbar } from "react-bulma-components";
import Brand from "./Brand";
import ButtonContainer from "./ButtonContainer";
import LinkContainer from "./LinkContainer";
import styles from "./PageHeader.module.scss";

// Links for the different changes pages. Last entry is used by the download button label.
// Due to limitations of Next.js i can't pull this data dynamically, but i'm looking into it.
// This only affects the PageHeader, nothing else.
export const sortedVersions = [ "2.0", "2.11", "2.15", "2.2", "2.26", "2.28", "2.29" ];

import backgroundBanner from "../../image-source-files/background-banner.png"; // TODO compressed version? looks odd

export default function PageHeader() {
  const { pathname } = useRouter();
  const latestVersion = sortedVersions[sortedVersions.length - 1];
  const [isActive, setActive] = useState(false);

  const backgroundGradient = `
    repeating-linear-gradient(
      to bottom,
      #35dcc5,
      #34d171 56px
    )
  `;

  const isHome = pathname === "/";

  return (
    <Container renderAs="header">
      <Navbar color="dark" className={styles.navbar} active={isActive}
        style={{
          background: `${backgroundGradient}, url(${backgroundBanner.src}) !important`,
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
            pathname={pathname}
            versions={sortedVersions}
            foldNavbar={() => setActive(false)}
          />
          <ButtonContainer
            latestVersion={latestVersion}
            foldNavbar={() => setActive(false)}
          />
        </Navbar.Menu>
      </Navbar>
    </Container>
  );
}
