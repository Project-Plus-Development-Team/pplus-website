import { useRouter } from "next/router";
import { useState } from "react";
import { Navbar } from "react-bulma-components";
import { Brand } from "./components/Brand";
import { ButtonContainer } from "./components/ButtonContainer";
import { LinkContainer } from "./components/LinkContainer";

import styles from "./PageHeader.module.scss";

// Links for the different changes pages. Last entry is used by the download button label.
// Due to limitations of Next.js i can't pull this data dynamically, but i'm looking into it.
// This only affects the PageHeader, nothing else.
export const sortedVersions = [ "2.0", "2.11", "2.15", "2.2", "2.26", "2.28", "2.29", "2.3" ];

import backgroundBanner from "~generated-images/background-banner.webp";

export const PageHeader = () => {
  const { pathname } = useRouter();
  const latestVersion = sortedVersions[sortedVersions.length - 1];
  const [isActive, setActive] = useState(false);

  const backgroundGradient = "repeating-linear-gradient(to bottom, #35dcc5, #34d171 56px)";

  const isHome = pathname === "/";

  return (
    <Navbar className={styles.navbar} active={isActive}
      style={{
        background: `${backgroundGradient}, url(${backgroundBanner.src})`,
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
  );
};