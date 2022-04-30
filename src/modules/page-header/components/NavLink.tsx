import Link from "next/link";
import { ReactElement } from "react";
import { A11tySwitch } from "shared/components/A11tyText";

import styles from "../PageHeader.module.scss";

interface NavLinkProps {
  text: string | ReactElement;
  href: string;
  pathname: string;
  onClick: () => void;
  className?: string;
  title?: string;
}

export const NavLink = ({
  text,
  href,
  pathname,
  onClick,
  title,
  className = "",
}: NavLinkProps) => {
  const isActive = href === (pathname || "/");
  const activeClass = isActive ? styles.navitemactive : "";

  return (
    <Link href={href} passHref>
      {/* The supressed linting errors stem from a big and/or the missing href which gets created by the <Link> above */}
      {/* [a11y] https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/issues/729 */}
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/anchor-is-valid, jsx-a11y/interactive-supports-focus */}
      <a
        className={`navbar-item ${styles.navitem} ${activeClass} ${className}`}
        aria-current={isActive ? "page" : undefined}
        onClick={onClick}
        role="link"
      >
        {title ? <A11tySwitch visible={text} screenReader={title} /> : text}
      </a>
    </Link>
  );
};
