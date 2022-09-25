import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FAButton } from "./FAButton";

interface PlatformButtonProps {
  text: string
  icon: IconProp
  href: string
  title?: string
}

export const PlatformButton = ({ text, icon, href, title }: PlatformButtonProps) => (
  <FAButton
    renderAs="a"
    color="link"
    icon={icon}
    href={href}
  >
    {title ? (
      <>
        <span aria-hidden>{text}</span>
        <span className="is-sr-only">{title}</span>
      </>
    ) : (
      text
    )}
  </FAButton>
);