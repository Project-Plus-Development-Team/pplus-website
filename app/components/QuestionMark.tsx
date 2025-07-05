import Link, { LinkProps } from "next/link";

type Props = LinkProps & {
  className?: string;
};

export const QuestionMark = (props: Props) => (
  <Link
    {...props}
    className={`
      ${props.className}
      tw:border tw:rounded-full tw:no-underline tw:text-[.6em]
    `}
    style={{
      transform: "translateY(-20px)",
    }}
  >
    ❔
  </Link>
);
