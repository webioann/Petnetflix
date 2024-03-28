export type Full_Media_Types = 'all' | 'tv' | 'movie'

export interface IMovie {
    media_type: 'movie';
    adult: boolean;
    backdrop_path: string;
    id: number;
    title: string;
    original_language: string;
    original_title: string;
    overview: string;
    poster_path: string;
    genre_ids: number[];
    popularity: number;
    release_date: string; 
    video?: boolean;
    vote_average: number;
    vote_count: number;
}
export interface ITvshow {
    media_type: 'tv';
    adult: boolean;
    backdrop_path: string;
    id: number;
    name: string;
    original_language: string;
    original_name: string;
    overview: string;
    poster_path: string;
    genre_ids: number[];
    popularity: number;
    first_air_date: string;
    vote_average: number;
    vote_count: number;
    origin_country: string[];
}

export type MovieOrTvshowType = 
    | IMovie
    | ITvshow

export interface TrendingResponse {
    page: number
    results: MovieOrTvshowType[]
    total_pages: number
    total_results: number
}
