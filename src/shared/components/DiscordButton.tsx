import { faDiscord } from "@fortawesome/free-brands-svg-icons";
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
    color="discord"
    href={`https://discord.com/invite/${inviteId}`}
    className={className}
    icon={faDiscord}
  >
    {text}
  </FAButton>
);