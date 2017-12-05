export interface ResponsePokeApi {
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