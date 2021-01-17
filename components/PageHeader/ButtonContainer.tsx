import Link from "next/link";
import { Navbar, Button } from "react-bulma-components";
import styles from "./PageHeader.module.scss";
import React from "react";
import FAButton from "../FAButton";

const DiscordButton = () => (
  <FAButton
    color="link"
    href="/discord"
    renderAs="a"
    className={`${styles.discordbutton} ${styles.expandbutton}`}
    icon="fab fa-discord"
  >
    Discord Server
  </FAButton>
);

interface ButtonContainerProps {
  latestVersion: string
  foldNavbar: () => void
}

export default function ButtonContainer({ latestVersion, foldNavbar }: ButtonContainerProps) {
  return (
    <Navbar.Container position="end">
      <Navbar.Item renderAs="div"> {/* <a> is default and gets an ugly shadow */}
       <Button.Group position="centered" className={styles.buttoncontainer}>
          <Link href="/download" passHref>
            <FAButton
              color="link"
              className={`has-text-weight-bold ${styles.expandbutton}`}
              onClick={foldNavbar}
              icon="fas fa-download"
            >
              Download v{latestVersion}
            </FAButton>
          </Link>
          <DiscordButton/>
       </Button.Group>
      </Navbar.Item>
    </Navbar.Container>
  );
}