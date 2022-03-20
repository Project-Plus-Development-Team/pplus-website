import FAButton from "./FAButton";

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
    target="_blank"
    className={`twitch ${className}`}
    icon="fab fa-twitch"
  >
    {text}
  </FAButton>
);