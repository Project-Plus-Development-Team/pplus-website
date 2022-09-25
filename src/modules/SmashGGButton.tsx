import { Button } from "react-bulma-components";
import { GoodImage } from "shared/components/GoodImage";

import image from "~generated-images/smashgg-favicon.webp";

interface Props {
  slug: string
  className?: string
  text?: string
}

export const SmashGGButton = ({
  slug,
  className = "",
  text = "smash.gg"
}: Props) => (
  <Button
    renderAs="a"
    color="smashgg"
    className={className}
    href={`https://smash.gg/tournament/${slug}`}
  >
    <GoodImage
      img={image}
      className="mr-2"
      alt="Smash.gg Logo"
      style={{
        width: 24,
        height: 24,
        marginLeft: -5
      }}
    />
    {text}
  </Button>
);