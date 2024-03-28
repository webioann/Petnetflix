import type { DiscoverResponse } from '@/types/discover.types'
import { Media_Type } from '@/types/discover.types'

export interface IDiscoverMoviesProps {
    media_type: Media_Type
    genre_id: number
}

export default async function fetchDiscoverMoviesAndTvshows({media_type, genre_id}: IDiscoverMoviesProps) {

    const serverResponse = await fetch(`https://api.themoviedb.org/3/discover/${media_type}?language=en-US&page=1&with_genres=${genre_id}`, {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: process.env.TMDB_KEY as string
        }
    })
    if(!serverResponse.ok) throw new Error('Failed to fetch data for Discover movies or TV shows slider')
    // fetch the first 10 results for better app performance (not 20)
    let result: Promise<DiscoverResponse> = serverResponse.json()
    const results = (await result).results
    const firstTenResults = results.filter((item, index) => index < 10)

    return firstTenResults
};
