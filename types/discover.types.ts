export type Media_Type = 'tv' | 'movie'

export interface IDiscoverMovie {
    adult: boolean
    backdrop_path: string
    genre_ids: number[]
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}   
export interface DiscoverResponse {
    page: number
    results: IDiscoverMovie[]
    total_pages: number
    total_results: number
}
