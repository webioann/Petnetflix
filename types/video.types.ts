export interface IVideoParams {
    media_type: 'movie' | 'tv' ;
    movie_id: number
}
export interface IVideo {
    id: string
    iso_639_1: string
    iso_3166_1: string
    key: string
    name: string
    official: boolean
    published_at: string
    site: string
    size: number
    type: string
}

export interface IVideoDataResponse {
    id: number
    results: IVideo[]
}