import FAButton from "./FAButton";

interface PlatformButtonProps {
  text: string
  icon: string
  href: string
}

export const PlatformButton = ({ text, icon, href }: PlatformButtonProps) => (
  <FAButton
    renderAs="a"
    color="link"
    target="_blank"
    icon={icon}
    href={href}
  >
    {text}
  </FAButton>
);