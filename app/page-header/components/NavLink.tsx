"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactElement } from "react";
import styles from "../PageHeader.module.scss";
import { A11tySwitch } from "../../components/A11tyText";

interface NavLinkProps {
	text: string | ReactElement;
	href: string;
	onClick?: () => void;
	className?: string;
	title?: string;
}

export const NavLink = ({
	text,
	href,
	onClick,
	title,
	className = "",
}: NavLinkProps) => {
	const isActive = href === (usePathname() || "/");
	const activeClass = isActive ? styles.navitemactive : "";

	return (
		<Link
			href={href}
			passHref
			className={`navbar-item ${styles.navitem} ${activeClass} ${className}`}
			aria-current={isActive ? "page" : undefined}
			onClick={onClick}
			role="link"
		>
			{title ? <A11tySwitch visible={text} screenReader={title} /> : text}
		</Link>
	);
};
