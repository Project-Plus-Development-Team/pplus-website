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
        <button
          {...onSnappy(() => setShow(!show))}
          className="has-text-white link-button has-text-left is-flex is-align-items-center gap"
          ref={scrollToRef}
          aria-expanded={show}
        >
          <FontAwesomeIcon
            icon={faAngleRight}
            className={styles.icon}
            style={{
              transform: show ? "rotateZ(90deg)" : ""
            }}
          />
          {name}
        </button>
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