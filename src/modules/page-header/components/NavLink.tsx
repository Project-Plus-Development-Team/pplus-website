import Link from "next/link";
import { ReactElement } from "react";

import styles from "../PageHeader.module.scss";

interface NavLinkProps {
  text: string|ReactElement,
  href: string,
  pathname: string,
  onClick: () => void
  className?: string
  title?: string
}

export const NavLink = ({
  text, href, pathname, onClick, title, className = ""
}: NavLinkProps) => {
  const isActive = href === (pathname || "/");
  const activeClass = isActive ? styles.navitemactive : "";

  return (
    <Link href={href} passHref>
      <a
        className={`navbar-item ${styles.navitem} ${activeClass} ${className}`}
        onClick={onClick}
        title={title} // TODO accessibility?
      >
        {text}
      </a>
    </Link>
  );
};