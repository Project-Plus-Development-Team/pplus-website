import Link from "next/link";
import { sortedVersions } from "modules/page-header/PageHeader";
import { useViewport } from "shared/hooks/use-viewport";
import { Container } from "react-bulma-components";
import { FAButton } from "shared/components/FAButton";
import { faDownload, faSearch } from "@fortawesome/free-solid-svg-icons";

import styles from "../Home.module.scss";

export const News = () => {
  const { isMobile } = useViewport();
  const newsButtonSize = isMobile ? "normal" : "large";

  return (
    <Container className={styles.news}>
      <Link href="/download" passHref>
        <FAButton
          color="link"
          className="has-text-weight-bold"
          icon={faDownload}
          title="Download the latest version of Project+"
          size={newsButtonSize}
        >
          Download Project+ v{sortedVersions[sortedVersions.length - 1]}
        </FAButton>
      </Link>
      <Link href="/find-communities" passHref>
        <FAButton
          color="success"
          className={`has-text-weight-bold ${styles.new_button}`}
          icon={faSearch}
          title="Find communities for your character, region, or other interests"
          size={newsButtonSize}
        >
          Find Communities
        </FAButton>
      </Link>
    </Container>
  );
};