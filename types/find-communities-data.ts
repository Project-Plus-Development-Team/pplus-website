export interface Coordinates {
  latitude: number
  longitude: number
}

export interface Platforms {
  discordInviteId: string
  facebookGroupId: string
  twitterHandle: string
  youtubeChannelUrl: string
  twitchName: string
  website: string
}

export type Threshold = "low" | "middle" | "high" | "show-always"

export interface Region {
  name: string
  showThreshold: number
  coordinates: Coordinates | null // TODO should not be null later
  platforms: Partial<Platforms>
}

export interface RawRegion {
  name: string
  showThreshold: Threshold | ""
  latitude: string
  longitude: string
  discordInviteId: string
  facebookGroupId: string
  twitterHandle: string
  youtubeUrlIsSlug: "TRUE" | "FALSE"
  youtubeChannelId: string
  twitchName: string
  website: string
}

export interface CSSEntry {
  name: string
  img: string
  isRandom?: boolean
}

export type CSSData = CSSEntry[][]