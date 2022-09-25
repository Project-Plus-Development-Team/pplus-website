export const getThumbnailUrl = (thumbnailUrlWithPlaceholders: string) => (
  thumbnailUrlWithPlaceholders
    .replace("{width}", "640")
    .replace("{height}", "360")
);