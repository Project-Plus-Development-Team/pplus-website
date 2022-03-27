import { useState } from "react";
import { CopyToClipboard } from "shared/components/CopyToClipboard";
import { Heading, Content, Icon } from "react-bulma-components";
import { CategoryIcon } from "./CategoryIcon";
import { getCurrentUrlWithHash } from "shared/functions/get-current-url-with-hash";

import styles from "../changes.module.scss";
import { useScrollToCategory } from "../changes-hooks";

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
        size={4}
        className="is-flex is-align-content-center copy-trigger"
      >
        <CategoryIcon name={name}/>
        <a
          onClick={() => setShow(!show)}
          className={`${styles.dropdown_toggle} has-text-white`}
          ref={scrollToRef}
        >
          <Icon className={`${styles.icon} ${show ? styles.rotate : ""}`}>
            <span className="fas fa-angle-right"/>
          </Icon>
          <span>
            {name}
          </span>
        </a>
        <CopyToClipboard
          link={link}
          style={{
            marginLeft: "0.5em"
          }}
        />
      </Heading>
      {show && (
        <Content>
          {children}
        </Content>
      )}
    </>
  );
};