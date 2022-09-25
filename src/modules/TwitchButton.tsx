import { faTwitch } from "@fortawesome/free-brands-svg-icons";
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
    color="twitch"
    href={`https://twitch.tv/${channelId}`}
    className={className}
    icon={faTwitch}
  >
    {text}
  </FAButton>
);