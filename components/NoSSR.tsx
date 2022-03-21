import { useEffect, useState } from "react";
import { ReactElement } from "react-markdown/lib/react-markdown";

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