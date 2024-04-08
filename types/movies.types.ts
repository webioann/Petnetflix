export type IMediaType = 'tv' | 'movie'
export type Full_Media_Types = 'all' | 'tv' | 'movie'

export interface IMovieType {
    adult: boolean
    backdrop_path: string
    genre_ids: number[]
    id: number
    original_language: string
    overview: string
    popularity: number
    poster_path: string
    vote_average: number
    vote_count: number
    // media_type in "/discover" does not exist
    media_type: 'movie' | 'tv'
    title: string 
    original_title: string 
    release_date: string 
    video: boolean 
}
export interface ITvshowType {
    adult: boolean
    backdrop_path: string
    genre_ids: number[]
    id: number
    original_language: string
    overview: string
    popularity: number
    poster_path: string
    vote_average: number
    vote_count: number
    // media_type in "/discover" does not exist
    media_type: 'movie' | 'tv'
    name: string 
    original_name: string 
    first_air_date: string 
    origin_country: string[] 
}
// types for TRENDING response (which includes "media_type")
export type IResultType = IMovieType | ITvshowType 
export interface IServerResponseType {
    page: number
    results: IResultType[]
    total_pages: number
    total_results: number
}
// types for DISCOVER response (without "media_type" in results array)
export type IDiscoverResultType = Omit<IMovieType, "media_type"> | Omit<ITvshowType, "media_type">
export interface IServerDiscoverResponseType {
    page: number
    results: IDiscoverResultType[]
    total_pages: number
    total_results: number
}

