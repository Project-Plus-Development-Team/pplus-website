import { ReactElement, useEffect, useState } from "react";

interface Props {
  children: ReactElement
}

export const NoSSR = ({ children }: Props) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return show ? children : null;
};