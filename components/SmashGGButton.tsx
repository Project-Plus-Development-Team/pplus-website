import { Button } from "react-bulma-components";

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
    color="danger"
    className={`smashgg ${className}`}
    href={`https://smash.gg/tournament/${slug}`}
    target="_blank"
  >
    <img 
      src={image.src}
      className="mr-2"
      style={{
        width: 24,
        height: 24,
        marginLeft: -5
      }}
    />
    {text}
  </Button>
);