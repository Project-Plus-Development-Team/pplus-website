import { useRouter } from "next/router";
import { useState } from "react";
import { Navbar } from "react-bulma-components";
import { Brand } from "./components/Brand";
import { ButtonContainer } from "./components/ButtonContainer";
import { LinkContainer } from "./components/LinkContainer";

import backgroundBanner from "~generated-images/background-banner.webp";
import styles from "./PageHeader.module.scss";

export const PageHeader = () => {
  const { pathname } = useRouter();
  const [isActive, setActive] = useState(false);

  const backgroundGradient =
    "repeating-linear-gradient(to bottom, #3e9e91, #2f825e 56px)";

  const isHome = pathname === "/";

  return (
    <Navbar
      className={styles.navbar}
      active={isActive}
      style={{
        background: `${backgroundGradient}, url(${backgroundBanner.src})`,
        backgroundBlendMode: "color",
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
          foldNavbar={() => setActive(false)}
        />
        <ButtonContainer foldNavbar={() => setActive(false)} />
      </Navbar.Menu>
    </Navbar>
  );
};
