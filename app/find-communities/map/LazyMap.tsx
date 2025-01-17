"use client";

import {
	faMap,
	faRefresh,
	faSkullCrossbones,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { PPlusMapProps } from "app/find-communities/map/Map";
import dynamic from "next/dynamic";

export const Loading = () => (
	<>
		<div>
			<FontAwesomeIcon icon={faMap} className="mr-3" />
			Loading Map...
		</div>
		<span
			className="is-inline-block"
			style={{
				borderLeftColor: "hsl(0, 0%, 20%)",
				borderBottomColor: "hsl(0, 0%, 20%)",
			}}
		/>
	</>
);

export const Error = ({
	retry,
	error,
}: {
	retry: (() => void) | undefined;
	error: unknown;
}) => (
	<>
		<div>
			<FontAwesomeIcon icon={faSkullCrossbones} className="mr-3" />
			There was an Error while loading this component.
		</div>
		<button onClick={retry} className="button">
			<FontAwesomeIcon icon={faRefresh} fixedWidth className="mr-2" />
			<span>Retry</span>
		</button>
		<p>Stringified error: {JSON.stringify(error)}</p>
	</>
);

export const LazyMap = dynamic<PPlusMapProps>(
	() => import("app/find-communities/map/Map").then((m) => m.Map),
	{
		loading: ({ error, isLoading, retry }) => (
			<div
				className="is-flex is-justify-content-center is-align-items-center"
				style={{ height: 400, backgroundColor: "black" }}
			>
				<h1 className="title is-flex is-flex-direction-column gap is-align-items-center">
					{error ? (
						<Error retry={retry} error={error} />
					) : (
						isLoading && <Loading />
					)}
				</h1>
			</div>
		),
		ssr: false,
	}
);
