import type { TrendingResponse, Full_Media_Types } from '@/types/trending.types'

export default async function fetchTrendingMoviesAndTvshows(media_type: Full_Media_Types) {

    const serverResponse = await fetch(`https://api.themoviedb.org/3/trending/${media_type}/week?language=en-US&page=1`, {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: process.env.TMDB_KEY as string
        }
    })
    if(!serverResponse.ok) throw new Error('Failed to fetch data for Trending movies or TV shows slider')
    // fetch the first 10 results for better app performance (not 20)
    let result: Promise<TrendingResponse> = serverResponse.json()
    const results = (await result).results
    const firstTenResults = results.filter((item, index) => index < 10)

    return firstTenResults
};
