export interface IPokemonListItem {
    name: string
    sprites: ISprites
    url: string
}

interface ISprites {
    back_default: string
}

export interface IPokemonDetail {
    id?: number
    name?: string
    stats?: IPokStates[]
    types?: IPokSTypes[],
    height?: number,
    weight?: number,
    sprites?: IPokSprites
}
export interface IPokStates {
    stat: IPokState
    effort: number
    base_stat: number
}
export interface IPokState {
    url: string
    name: string
}
export interface IPokSTypes {
    slot: number
    type: IPokType
}
export interface IPokType {
    url: string
    name: string
}
export interface IPokSprites {
    back_female: string,
    back_shiny_female: string,
    back_default: string
    front_female: string,
    front_shiny_female: string,
    back_shiny: string
    front_default: string
    front_shiny : string
}

export interface INavigation {
    current_navigation: number,
    offset: number
    list: number[]
}