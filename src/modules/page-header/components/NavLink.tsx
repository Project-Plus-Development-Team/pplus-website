import Link from "next/link";
import { ReactElement } from "react";

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
      <a
        className={`navbar-item ${styles.navitem} ${activeClass} ${className}`}
        aria-current={isActive ? "page" : undefined}
        onClick={onClick}
      >
        {title ? (
          <>
            <span className="is-sr-only">{title}</span>
            <span aria-hidden>{text}</span>
          </>
        ) : (
          text
        )}
      </a>
    </Link>
  );
};
