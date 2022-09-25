import { CSSProperties } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faLink } from "@fortawesome/free-solid-svg-icons";
import { useClipboard } from "shared/hooks/use-clipboard";

interface Props {
  link: string
  className?: string
  style?: CSSProperties
}

export const CopyToClipboard = ({ link, className, style }: Props) => {
  const [hasCopied, setClipboard] = useClipboard(link);

  return (
    <button
      onClick={() => setClipboard()}
      className={`link-button is-flex is-align-items-center copy mx-3 ${className ?? ""}`}
      title="Copy link to clipboard"
      style={style}
    >
      <FontAwesomeIcon fixedWidth icon={hasCopied ? faCheck : faLink}/>

      {/* needs to be global in order for it to see .dropdown-toggle */}
      <style jsx global>{`
        .copy {
          color: hsl(0, 0%, 30%);
          font-size: 1.2rem;
          transition: color 0.08s ease;
        }

        .copy-trigger:hover > .copy, .copy:focus {
          color: hsl(0, 0%, 90%);
        }
      `}</style>
    </button>
  );
};