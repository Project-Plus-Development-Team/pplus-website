import Link from "next/link";
import { Navbar, Button, Icon } from "react-bulma-components";
import styles from "./PageHeader.module.scss";
import React from "react";

const DiscordButton = () => (
  <Button
    color="link"
    href="/discord"
    renderAs="a"
    className={`${styles.discordbutton} ${styles.expandbutton}`}
  >
    <Icon>
      <span className="fab fa-discord"/>
    </Icon>
    <span>Discord Server</span>
  </Button>
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
            <Button
              color="link"
              className={`has-text-weight-bold ${styles.expandbutton}`}
              onClick={foldNavbar}
            >
              <Icon>
                <span className="fas fa-download"/>
              </Icon>
              <span>Download v{latestVersion}</span>
            </Button>
          </Link>
          <DiscordButton/>
       </Button.Group>
      </Navbar.Item>
    </Navbar.Container>
  );
}