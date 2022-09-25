import { faMap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MapProps } from "modules/find-communities/map/Map";
import dynamic from "next/dynamic";
import { Placeholder } from "shared/components/Placeholder";

export const LazyMap = dynamic<MapProps>(
  () => (
    import("modules/find-communities/map/Map")
      .then(m => m.Map)
  ),
  {
    loading: ({ error, isLoading, retry }) => (
      <Placeholder
        error={error}
        isLoading={isLoading}
        retry={retry}
        height={400} // TODO make dynamic like map component
      >
        <FontAwesomeIcon icon={faMap} className="mr-3"/>
        Loading Map...
      </Placeholder>
    ),
    ssr: false
  }
);