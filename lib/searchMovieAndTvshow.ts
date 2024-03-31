import type { TrendingResponse } from '@/types/movies.types'

export default async function searchMovieAndTvshow(search_query: string) {

    const serverResponse = await fetch(`https://api.themoviedb.org/3/search/multi?query=${search_query}&api_key=${process.env.TMDB_API_KEY}&include_adult=false&language=en-US&page=1`, {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: process.env.TMDB_KEY as string
        }
    })
    if(!serverResponse.ok) throw new Error('Failed to fetch search data')
    // fetch the first 10 results for better app performance (not 20)
    let result: Promise<TrendingResponse> = serverResponse.json()
    const searching_results = (await result).results
    const media_exists = searching_results.filter((item) => item.media_type === 'movie' || item.media_type === 'tv')
    const image_exists = media_exists.filter((item) => item.backdrop_path !== null || item.poster_path !== null)

    const sorted = image_exists.sort((x, y) => {
        if (x.popularity > y.popularity) {
            return -1;
        }
        if (x.popularity < y.popularity) {
            return 1;
        }
        return 0;
    } )
    return sorted
};
