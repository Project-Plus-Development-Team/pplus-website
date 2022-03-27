import { forwardRef, RefObject } from "react";
import { Button, Icon } from "react-bulma-components";
import { RenderAsComponent } from "react-bulma-components/src/components";

type ButtonProps = Parameters<typeof Button>["0"]

type Props = ButtonProps & {
  icon: string
}

export const FAButton = forwardRef<RenderAsComponent, Props>(({ icon, children: title, ...rest }, ref) => (
  <Button {...rest} domRef={ref as RefObject<RenderAsComponent>}>
    {icon === undefined ? (
      title
    ) : (
      <>
        <Icon style={{
          margin: title === undefined ? "0" : ""
        }}>
          <span className={icon}/>
        </Icon>
        {title !== undefined && (
          <span>{title}</span>
        )}
      </>
    )}
  </Button>
));