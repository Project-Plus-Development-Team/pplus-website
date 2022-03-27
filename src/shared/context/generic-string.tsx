import { createContext, useContext } from "react";

export const makeGenericStringContext = (name: string) => {
  const thisContext = createContext<string|null>(null);

  const useThisContext = (): string => {
    const siteUrl = useContext(thisContext);

    if (siteUrl === null) {
      throw new Error(`${name} is null, no provider? :(`);
    }

    return siteUrl;
  };

  return [
    thisContext,
    useThisContext
  ] as const;
};