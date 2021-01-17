import { Button, Icon } from "react-bulma-components";

export default function FAButton({ icon, children: title, ...rest }) {
  return (
    <Button {...rest}>
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
  );
}