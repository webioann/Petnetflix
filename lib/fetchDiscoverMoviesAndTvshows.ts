import type { IServerDiscoverResponseType, IMediaType } from '@/types/movies.types'

export interface IDiscoverMoviesProps {
    media_type: IMediaType
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
    let result: Promise<IServerDiscoverResponseType> = serverResponse.json()
    const results = (await result).results
    const image_exists = results.filter((item) => item.backdrop_path !== null || item.poster_path !== null)
    const firstTenResults = image_exists.filter((item, index) => index < 10)
    // in this server response "media_type" does not exist, and i am added this key manually
    const addInObjectKeyMediaType = firstTenResults.map((item) => {
        return {
            ...item,
            media_type: media_type
        }
    })

    return addInObjectKeyMediaType
};
