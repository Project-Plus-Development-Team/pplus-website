import { Dispatch, useEffect, useRef, useState } from "react";

export const useCategoryToUnfold = () => {
  const [categoryToUnfold, setCategoryToUnfold] = useState<string>();

  useEffect(() => { 
    const decodedHash = decodeURI(window.location.hash);
    const target = decodedHash.slice(1).trim();

    if (target) {
      setCategoryToUnfold(target);
    }
  }, []);

  return categoryToUnfold;
};

export const useScrollToCategory = (
  shouldBeShown: boolean,
  setShow: Dispatch<boolean>
) => {
  const scrollToRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (shouldBeShown) {
      setShow(true);

      scrollToRef.current?.scrollIntoView({
        behavior: "smooth"
      });
    }
  }, [shouldBeShown]);

  return scrollToRef;
};