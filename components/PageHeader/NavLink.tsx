import Link from "next/link";
import { Navbar } from "react-bulma-components";
import styles from "./PageHeader.module.scss";

export default function NavLink({ text, href, pathname }) {
  const isActive = href === (pathname || "/");
  const activeClass = isActive ? styles.navitemactive : "";

  return (
    <Link href={href}>
      <Navbar.Item
        renderAs="a"
        className={`${styles.navitem} ${activeClass}`}
      >
        {text}
      </Navbar.Item>
    </Link>
  );
}