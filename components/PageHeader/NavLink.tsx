import Link from "next/link";
import styles from "./PageHeader.module.scss";

interface NavLinkProps {
  text: string,
  href: string,
  pathname: string,
  onClick: () => void
  className?: string
}

export default function NavLink({
  text, href, pathname, onClick, className = ""
}: NavLinkProps) {
  const isActive = href === (pathname || "/");
  const activeClass = isActive ? styles.navitemactive : "";

  return (
    <Link href={href} passHref>
      <a
        className={`navbar-item ${styles.navitem} ${activeClass} ${className}`}
        onClick={onClick}
      >
        {text}
      </a>
    </Link>
  );
}