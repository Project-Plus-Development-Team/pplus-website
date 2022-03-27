import { FAButton } from "./FAButton";

interface Props {
  inviteId: string
  className?: string
  text?: string
}

export const DiscordButton = ({
  inviteId,
  className = "",
  text = "Discord"
}: Props) => (
  <FAButton
    renderAs="a"
    color="link"
    href={`https://discord.gg/${inviteId}`}
    className={`discord ${className}`}
    icon="fab fa-discord"
  >
    {text}
  </FAButton>
);