import { FAButton } from "./FAButton";

interface PlatformButtonProps {
  text: string
  icon: string
  href: string
  title?: string
}

export const PlatformButton = ({ text, icon, href, title }: PlatformButtonProps) => (
  <FAButton
    renderAs="a"
    color="link"
    icon={icon}
    href={href}
    title={title}
  >
    {text}
  </FAButton>
);