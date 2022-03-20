export interface ChangeObjectType {
  title: string
  changes: (string|ChangeObjectType)[]
}

export interface CharacterType {
  name: string
  element: {}
  moves: ChangeObjectType[]
}

export interface VersionData {
  links?: {
    [url: string]: {
      url: string
      icon?: string
    }
  }
  changes: CharacterType[]
}