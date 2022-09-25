import { useEffect, useRef, useState } from "react";
import { RenderAsComponent } from "react-bulma-components/src/components";

export const useDropdownState = () => {
  const [active, setActive] = useState(false);
  const linkRef = useRef<RenderAsComponent>(null);

  useEffect(() => {
    const handler: EventListener = event => {
      if (event.target === linkRef.current) {
        // if the clicked element is the parent Navbar.Link
        // then don't set active to false, because otherwise
        // you can't open the dropdown at all
        return;
      }

      setActive(false);
    };

    window.addEventListener("click", handler);

    return () => {
      window.removeEventListener("click", handler);
    };
  }, []);

  return { active, setActive, linkRef };
};