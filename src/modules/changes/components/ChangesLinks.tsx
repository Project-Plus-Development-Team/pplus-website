import { faFileAlt, faMusic } from "@fortawesome/free-solid-svg-icons";
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
        icon={
          icon === "fas fa-file-alt" ? (
            faFileAlt
          ) : (
            icon === "fas fa-music" ? faMusic : (() => {
              // TODO update the data format to not even allow custom icons
              throw new Error(`${icon} is not supported for this component.`);
            })()
          )
        }
      >
        {title}
      </FAButton>
    ))}
  </Button.Group>
);