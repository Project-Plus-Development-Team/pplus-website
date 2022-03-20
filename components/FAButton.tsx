import { forwardRef, RefObject } from "react";
import { Button, Icon } from "react-bulma-components";
import { RenderAsComponent } from "react-bulma-components/src/components";

type ButtonProps = Parameters<typeof Button>["0"]

type Props = ButtonProps & {
  icon: string
}

const FAButton = forwardRef<RenderAsComponent, Props>(({ icon, children: title, ...rest }, ref) => (
  <Button {...rest} domRef={ref as RefObject<RenderAsComponent>}>
    {icon === undefined ? (
      title
    ) : (
      <>
        <Icon>
          <span className={icon}/>
        </Icon>
        <span>{title}</span>
      </>
    )}
  </Button>
));

export default FAButton;