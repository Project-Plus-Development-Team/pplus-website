import { HTMLAttributes } from "react";

export const Note = (props: HTMLAttributes<HTMLParagraphElement>) => (
  <p
    {...props}
    className={`
      ${props.className ?? ""}
      tw:bg-[#0e0e0e]
      tw:px-3
      tw:py-2
      tw:rounded-xl
      tw:border
      tw:border-[#222222]
      tw:before:content-['ⓘ']
      tw:before:mr-1
      tw:before:font-bold
      tw:before:text-blue-600
    `}
  />
);
