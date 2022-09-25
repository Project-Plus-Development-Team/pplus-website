import Link from "next/link";
import { Container } from "react-bulma-components";
import { FAButton } from "shared/components/FAButton";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faTwitch } from "@fortawesome/free-brands-svg-icons";

import styles from "../Home.module.scss";

export const News = () => (
  <Container className={styles.news}>
    <Link href="/watch/streams" passHref>
      <FAButton
        color="twitch"
        className="has-text-weight-bold"
        icon={faTwitch}
        renderAs="a"
      >
        Check for Twitch livestreams
      </FAButton>
    </Link>
    <Link href="/find-communities" passHref>
      <FAButton
        color="success"
        className="has-text-weight-bold"
        icon={faSearch}
        renderAs="a"
      >
        Find Communities
      </FAButton>
    </Link>
  </Container>
);