import { makeComparable, streamIsSupportedMod, SupportedMod } from "./supported-mods";

interface ModAndTitle {
  mod: SupportedMod|null
  title: string
}

export const getModDataFromTitle = (streamTitle: string): ModAndTitle => {
  const result = streamTitle.match(/^\s*\[(.*?)]\s*(.*)$/);

  if (result === null || !streamIsSupportedMod(streamTitle)) {
    return {
      mod: null,
      title: streamTitle
    };
  }

  return {
    mod: makeComparable(result[1]) as SupportedMod,
    title: result[2]
  };
};

interface ModDetails {
  image: string
  alt: string
}

export const getModDetails = (mod: SupportedMod): ModDetails => {
  switch (mod) {
    case "p+": return {
      image: "/images/generated/favicon.webp",
      alt: "Project+"
    };
    case "t+": return {
      image: "/images/generated/communities/project-m.webp",
      alt: "Tournament Addition"
    };
    case "pm": return {
      image: "/images/generated/communities/tournament-addition.webp",
      alt: "Project M"
    };
  }
};

export const getThumbnailUrl = (thumbnailUrlWithPlaceholders: string) => (
  thumbnailUrlWithPlaceholders
    .replace("{width}", "640")
    .replace("{height}", "360")
);