import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { forwardRef, RefObject } from "react";
import { Button } from "react-bulma-components";
import { RenderAsComponent } from "react-bulma-components/src/components";

type ButtonProps = Parameters<typeof Button>["0"]

type Props = ButtonProps & {
  icon: IconProp | undefined // TODO undefined why..?
}

// TODO fix props for typescript

export const FAButton = forwardRef<RenderAsComponent, Props>(({ icon, children: title, ...rest }, ref) => (
  <Button {...rest} domRef={ref as RefObject<RenderAsComponent>}>
    {icon === undefined ? (
      title
    ) : (
      <>
        <FontAwesomeIcon
          icon={icon}
          style={{
            marginRight: title === undefined ? "" : "0.5em"
          }}
          fixedWidth={true}
        />
        {title !== undefined && (
          <span>{title}</span>
        )}
      </>
    )}
  </Button>
));