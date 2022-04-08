import { useState } from "react";
import { CopyToClipboard } from "shared/components/CopyToClipboard";
import { Heading, Content } from "react-bulma-components";
import { CategoryIcon } from "./CategoryIcon";
import { getCurrentUrlWithHash } from "shared/functions/get-current-url-with-hash";
import { useScrollToCategory } from "../changes-hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { onSnappy } from "shared/functions/on-snappy";

import styles from "../changes.module.scss";

interface Props {
  name: string
  shouldBeShown: boolean
  children: JSX.Element[]
}

export const Category = ({ shouldBeShown, name, children }: Props) => {
  const [show, setShow] = useState(false);
  const scrollToRef = useScrollToCategory(shouldBeShown, setShow);
  const link = getCurrentUrlWithHash(name, true);

  return (
    <>
      <Heading
        size={2}
        className="is-flex is-align-content-center copy-trigger"
      >
        <CategoryIcon name={name}/>
        <a
          {...onSnappy(() => setShow(!show), true)}
          className={`${styles.dropdown_toggle} has-text-white`}
          ref={scrollToRef}
          href="#"
        >
          <FontAwesomeIcon
            icon={faAngleRight}
            className={`${styles.icon} ${show ? styles.rotate : ""}`}
          />
          {name}
        </a>
        <CopyToClipboard link={link}/>
      </Heading>
      {show && (
        <Content>
          {children}
        </Content>
      )}
    </>
  );
};