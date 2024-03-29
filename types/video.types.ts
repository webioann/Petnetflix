type TypeOfVideo =
    | 'Bloopers' 
    | 'Featurette' 
    | 'Behind of Scenes' 
    | 'Clip' 
    | 'Trailer' 
    | 'Teaser'

export interface IVideosData {
    iso_639_1: string
    iso_3166_1: string
    name: string
    key: string
    site: string
    size: number
    type: TypeOfVideo
    official: boolean
    published_at: string
    id: string
}
export interface IVideoDataResponse {
    id: number
    results: IVideosData[]
}
