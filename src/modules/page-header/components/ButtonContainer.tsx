import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Button, Navbar } from "react-bulma-components";
import { FAButton } from "shared/components/FAButton";

import styles from "../PageHeader.module.scss";

export const ButtonContainer = ({ foldNavbar }: { foldNavbar: () => void }) => (
  <Navbar.Container align="right">
    <Navbar.Item renderAs="span">
      {/* don't nest <a> */}
      <Button.Group align="center" className={styles.buttonContainer}>
        <Link href="/download" passHref>
          <FAButton
            color="link"
            className={`has-text-weight-bold ${styles.expandButton}`}
            onClick={foldNavbar}
            icon={faDownload}
            renderAs="a"
          >
            Download
          </FAButton>
        </Link>
        <FAButton
          color="discord"
          className={styles.expandButton}
          href="/discord"
          icon={faDiscord}
          renderAs="a"
        >
          Discord Server
        </FAButton>
      </Button.Group>
    </Navbar.Item>
  </Navbar.Container>
);
