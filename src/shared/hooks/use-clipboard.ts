import { useEffect, useState } from "react";

export const useClipboard = (text: string) => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (isCopied) {
      const id = setTimeout(() => {
        setIsCopied(false);
      }, 2000);

      return () => {
        clearTimeout(id);
      };
    }
  }, [isCopied]);

  return [
    isCopied,
    async () => {
      try {
        await navigator.clipboard.writeText(text);
        setIsCopied(true);
      } catch {
        alert("Can't copy to clipboard. Your browser might be out of date.");
      }
    }
  ] as const;
};