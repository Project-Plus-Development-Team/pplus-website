export interface ChangeObjectType {
  title: string
  changes: (string|ChangeObjectType)[]
}

export interface CategoryType {
  name: string
  element: {}
  moves: ChangeObjectType[]
}

export interface VersionData {
  version: string
  links?: {
    [url: string]: {
      url: string
      icon?: string
    }
  }
  changes: CategoryType[]
}

/** For AllVersionChanges */
export interface ChangeBlock {
  version: string
  changes: ChangeObjectType[]
}