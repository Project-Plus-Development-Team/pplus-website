import { Button } from "react-bulma-components";
import { FAButton } from "shared/components/FAButton";
import { VersionData } from "../changes-types";

interface Props {
  links: VersionData["links"]
}

export const ChangesLinks = ({ links }: Props) => (
  <Button.Group>
    {Object.entries(links!).map(([title, { url, icon }], index) => (
      <FAButton
        color="link"
        key={index}
        href={url}
        renderAs="a"
        icon={icon}
      >
        {title}
      </FAButton>
    ))}
  </Button.Group>
);