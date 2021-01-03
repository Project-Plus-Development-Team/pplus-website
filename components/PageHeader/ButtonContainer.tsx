import Link from "next/link";
import { Navbar, Button, Icon } from "react-bulma-components";
import styles from "./PageHeader.module.scss";
import React from "react";

const DiscordButton = () => (
  <Button color="link" className={styles.discordbutton}>
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
        <div className="field is-grouped">
          <div className="control">
            <Link href="/download">
              <Button color="link" className="has-text-weight-bold" onClick={foldNavbar}>
                <Icon>
                  <span className="fas fa-download"/>
                </Icon>
                <span>Download v{latestVersion}</span>
              </Button>
            </Link>
          </div>
          <div className="control">
            <a href="/discord">
              <DiscordButton/>
            </a>
          </div>
        </div>
      </Navbar.Item>
    </Navbar.Container>
  );
}