import { createElement, HTMLAttributes, ReactNode } from "react";

// <h1>-<h6> + <a>

type Props = HTMLAttributes<HTMLHeadElement> & {
  id: string;
  children?: ReactNode;
};

const HA = ({ h, children, ...props }: Props & { h: number }) =>
  createElement(
    "h" + h,
    { ...props, className: `title is-${h} ${props.className ?? ""}` },
    <a
      href={`#${props.id}`}
      className={`
        tw:not-hover:no-underline tw:text-white
        tw:before:content-['#'] tw:before:inline-block
        tw:not-hover:before:invisible
        tw:before:text-neutral-400
        tw:before:-ml-4
        tw:before:w-4
        tw:before:text-xl
      `}
    >
      {children}
    </a>
  );

export const HA1 = (props: Props) => <HA h={1} {...props} />;
export const HA2 = (props: Props) => <HA h={2} {...props} />;
export const HA3 = (props: Props) => <HA h={3} {...props} />;
export const HA4 = (props: Props) => <HA h={4} {...props} />;
export const HA5 = (props: Props) => <HA h={5} {...props} />;
export const HA6 = (props: Props) => <HA h={6} {...props} />;
