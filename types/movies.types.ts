export type Media_Type = 'tv' | 'movie'
export type Full_Media_Types = 'all' | 'tv' | 'movie'

export interface IDiscoverMovieOrTvshow {
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

    // MEDIA_TYPE
    media_type: 'movie' | 'tv'
    // SEARCH ==> YES
    // DISCOVER ==> NOT
    // TRENDING ==> YES
    // BIILBOARD ==> YES
    
    // movies ========= only ====
    title: string // movie
    original_title: string // movie
    release_date: string //movie
    video: boolean // movies

    // tv shows ======= only ====
    name: string //tv
    original_name: string //tv
    first_air_date: string // tv
    origin_country: string[] // tv
}  
export interface ITrendingMovie {
    adult: boolean;
    backdrop_path: string;
    id: number;
    title: string;
    original_language: string;
    original_title: string;
    overview: string;
    poster_path: string;
    media_type: 'movie';
    genre_ids: number[];
    popularity: number;
    release_date: string; 
    video?: boolean;
    vote_average: number;
    vote_count: number;
}
export interface ITrendingTvshow {
    adult: boolean;
    backdrop_path: string;
    id: number;
    name: string;
    original_language: string;
    original_name: string;
    overview: string;
    poster_path: string;
    media_type: 'tv';
    genre_ids: number[];
    popularity: number;
    first_air_date: string;
    vote_average: number;
    vote_count: number;
    origin_country: string[];
}
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
    media_type?: 'movie' | 'tv'
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
    media_type?: 'movie' | 'tv'
    name: string 
    original_name: string 
    first_air_date: string 
    origin_country: string[] 
}
// MIX OF ===========================================
export type IResultType = IMovieType | ITvshowType
export interface IServerResponseType {
    page: number
    results: IDiscoverMovieOrTvshow[]
    total_pages: number
    total_results: number
}


export type TrendingMoviesType =  | ITrendingMovie | ITrendingTvshow
export type TotalMovieAndTvshowType = | IDiscoverMovieOrTvshow | ITrendingMovie | ITrendingTvshow

// RESPONSES ==================
export interface DiscoverResponse {
    page: number
    results: IDiscoverMovieOrTvshow[]
    total_pages: number
    total_results: number
}
export interface TrendingResponse {
    page: number
    results: TrendingMoviesType[]
    total_pages: number
    total_results: number
}

















// export interface IMovie {
//     // without "adult"
//     backdrop_path: string
//     media_type?: 'tv' | 'movie' 
//     release_data?: string
//     first_air_date: string
//     genre_ids: number[]
//     id: number
//     name?: string
//     title?: string
//     origin_country: string[]
//     original_language:string
//     original_name?: string
//     original_title?: string
//     overview: string
//     popularity: number
//     poster_path: string
//     vote_average: number
//     vote_count: number
// }

// export interface IMoviesDataResponse {
//     page: number
//     results: IMovie[]
//     total_pages: number
//     total_results: number
// }
// export interface IGenres {
//     id: number
//     name: string
// }

// export interface IErrorServerResponse {
//     success: boolean
//     status_code: number
//     status_message: string
// }
// export interface IWrongPersonResponse {
//     adult: boolean
//     genre: number
//     id: number
//     known_for: IMovie[]
//     known_for_department: string
//     media_type: 'person'
//     name: string
//     original_name: string
//     popularity: number
//     profile_path: string | null
// }

// export interface IMovieWithMedia {
//     backdrop_path: string
//     media_type: 'tv' | 'movie' 
//     release_data?: string
//     first_air_date: string
//     genre_ids: number[]
//     id: number
//     name?: string
//     title?: string
//     origin_country: string[]
//     original_language:string
//     original_name?: string
//     original_title?: string
//     overview: string
//     popularity: number
//     poster_path: string
//     vote_average: number
//     vote_count: number
// }
