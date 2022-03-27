import { ReactElement } from "react";
import { Heading } from "react-bulma-components";
import { FAButton } from "shared/components/FAButton";

interface Props {
  error?: Error | null
  isLoading?: boolean
  retry?: () => void
  height: number
  children: (ReactElement|string)[]
}

const LoadingContent = ({ children }: Pick<Props, "children">) => (
  <>
    <div>
      {children}
    </div>
    <span className="loader is-inline-block"/>
  </>
);

const ErrorContent = ({ retry }: Pick<Props, "retry">) => (
  <>
    <div>
      <span className="fa-solid fa-skull-crossbones mr-3"/>
      There was an Error while loading this component.
    </div>
    <FAButton icon="fas fa-refresh" onClick={retry}>Retry</FAButton>
  </>
);

export const Placeholder = ({ error, isLoading, retry, height, children }: Props) => (
  <div
    className="is-flex is-justify-content-center is-align-items-center has-background-black"
    style={{ height }} // TODO analog to responsive map height
  >
    <Heading size={1} className="has-text-dark is-flex is-flex-direction-column gap is-align-items-center">
      {error && (
        <ErrorContent retry={retry}/>
      )}
      {isLoading && (
        <LoadingContent>
          {children}
        </LoadingContent>
      )}
    </Heading>
  </div>
);