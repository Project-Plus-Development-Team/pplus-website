"use client";

import dynamic from "next/dynamic";

export const LazyEUMap = dynamic(
	() => import("app/european-player-map/ActualMap").then((m) => m.ActualMap),
	{
		ssr: false,
	}
);
