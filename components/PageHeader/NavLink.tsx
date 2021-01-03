import Link from "next/link";
import { Navbar } from "react-bulma-components";
import styles from "./PageHeader.module.scss";

interface NavLinkProps {
  text: string,
  href: string,
  pathname: string,
  onClick: () => void
}

export default function NavLink({ text, href, pathname, onClick }: NavLinkProps) {
  const isActive = href === (pathname || "/");
  const activeClass = isActive ? styles.navitemactive : "";

  return (
    <Link href={href}>
      <Navbar.Item
        renderAs="a"
        className={`${styles.navitem} ${activeClass}`}
        onClick={onClick}
      >
        {text}
      </Navbar.Item>
    </Link>
  );
}