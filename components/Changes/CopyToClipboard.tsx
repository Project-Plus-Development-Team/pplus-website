import useClipboard from "react-use-clipboard";
import { Icon } from "react-bulma-components";

export default function CopyToClipboard({ link } : { link: string }) {
  const [hasCopied, setClipboard] = useClipboard(link, {
    successDuration: 2000
  });

  return (
    <a onClick={setClipboard} className="copy" title="Copy link to clipboard">
      <Icon>
        <span className={hasCopied ? "fas fa-check" : "fa fa-link"}/>
      </Icon>

      <style jsx>{`
        .copy {
          visibility: hidden;
          line-height: 39px;
          margin-left: 1rem;
          font-size: 1.2rem;
        }
      `}</style>

      {/* needs to be global in order for it to see .dropdown-toggle */}
      <style jsx global>{`
        h1:hover > .copy {
          visibility: visible;
        }
      `}</style>
    </a>
  );
}