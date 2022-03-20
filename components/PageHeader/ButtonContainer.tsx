import Link from "next/link";
import { Navbar, Button } from "react-bulma-components";
import styles from "./PageHeader.module.scss";
import FAButton from "../FAButton";

const DiscordButton = () => (
  <FAButton
    color="link"
    href="/discord"
    renderAs="a"
    className={`discord ${styles.expandbutton}`}
    icon="fab fa-discord"
    title="Project+ Discord Server"
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
    <Navbar.Container align="right">
      <Navbar.Item renderAs="div"> {/* <a> is default and gets an ugly shadow */}
       <Button.Group align="center" className={styles.buttoncontainer}>
          <Link href="/download" passHref>
            <FAButton
              color="link"
              className={`has-text-weight-bold ${styles.expandbutton}`}
              onClick={foldNavbar}
              icon="fas fa-download"
              title="Download the latest version of Project+"
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