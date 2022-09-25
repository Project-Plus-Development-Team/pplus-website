import { CSSMainProps } from "modules/find-communities/css/CSSMain";
import dynamic from "next/dynamic";
import { Placeholder } from "shared/components/Placeholder";

export const LazyCSS = dynamic<CSSMainProps>(
  () => (
    import("modules/find-communities/css/CSSMain")
      .then(m => m.CSSMain)
  ),
  {
    loading: ({ error, isLoading, retry }) => (
      <Placeholder
        error={error}
        isLoading={isLoading}
        retry={retry}
        height={400}
      >
        <span className="fas fa-map mr-3"/>
        Loading Character Selection Screen...
      </Placeholder>
    ),
    ssr: false
  }
);