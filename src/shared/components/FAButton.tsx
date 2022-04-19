import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { forwardRef, ReactNode, RefObject } from "react";
import { Button } from "react-bulma-components";
import { BulmaComponent, RenderAsComponent } from "react-bulma-components/src/components";
import { A11tySwitch } from "./A11tyText";

type ButtonProps = Parameters<typeof Button>["0"]

type Props = ButtonProps & {
  icon: IconProp
  screenReader?: ReactNode
}

export const FAButton = forwardRef<RenderAsComponent, Props>(({ icon, children, screenReader, ...rest }, ref) => (
  <Button {...rest} domRef={ref as RefObject<RenderAsComponent>}>
    {icon === undefined ? (
      children
    ) : (
      <>
        <FontAwesomeIcon
          icon={icon}
          style={{
            marginRight: children === undefined ? "" : "0.5em"
          }}
          fixedWidth={true}
        />
        {screenReader !== undefined ? (
          <A11tySwitch
            visible={children}
            screenReader={screenReader}
          />
        ) : (
          children !== undefined && (
            <span>{children}</span>
          )
        )}
      </>
    )}
  </Button>
)) as BulmaComponent<Props, "button">;

// TODO fix "as"