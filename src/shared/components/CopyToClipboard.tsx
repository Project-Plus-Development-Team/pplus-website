import useClipboard from "react-use-clipboard";
import { Icon } from "react-bulma-components";
import { CSSProperties } from "react";

interface Props {
  link: string
  className?: string
  style?: CSSProperties
}

export const CopyToClipboard = ({ link, className, style }: Props) => {
  const [hasCopied, setClipboard] = useClipboard(link, {
    successDuration: 2000
  });

  return (
    <a
      onClick={setClipboard}
      className={`is-flex is-align-items-center copy mx-3 ${className ?? ""}`}
      title="Copy link to clipboard"
      style={style}
    >
      <Icon>
        <span className={hasCopied ? "fas fa-check" : "fa fa-link"}/>
      </Icon>

      {/* needs to be global in order for it to see .dropdown-toggle */}
      <style jsx global>{`
        .copy {
          color: hsl(0, 0%, 30%);
          font-size: 1.2rem;
        }

        .copy-trigger:hover > .copy {
          color: hsl(0, 0%, 90%);
        }
      `}</style>
    </a>
  );
};