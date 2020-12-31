export interface ChangeObjectType {
  title: string
  changes: (string|ChangeObjectType)[]
}

export interface CharacterType {
  name: string
  element: {}
  moves: [ChangeObjectType][]
}

export type ChangesType = CharacterType[]