// Function says: These types are for the changes / version page generation system

export interface ChangeObjectType {
  title: string
  changes: (string|ChangeObjectType)[]
}

export interface CharacterType {
  name: string
  element: {}
  moves: [ChangeObjectType][]
}

export interface VersionData {
  links?: {
    [url: string]: string
  }
  changes: CharacterType[]
}