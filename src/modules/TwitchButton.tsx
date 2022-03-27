import { FAButton } from "shared/components/FAButton";

interface Props {
  channelId: string
  className?: string
  text?: string
}

export const TwitchButton = ({
  channelId,
  className = "",
  text = "Stream"
}: Props) => (
  <FAButton
    renderAs="a"
    color="link"
    href={`https://twitch.tv/${channelId}`}
    className={`twitch ${className}`}
    icon="fab fa-twitch"
  >
    {text}
  </FAButton>
);