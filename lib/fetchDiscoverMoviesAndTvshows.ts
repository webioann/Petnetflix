import type { TrendingResponse, Media_Type } from '@/types/trending.types'
import { movies_genres_list, tvshows_genres_list } from '@/data/genresList'

export default async function fetchDiscoverMoviesAndTvshows(media_type: Media_Type) {
    const genreId = 35
    const genre = 'Comedy'

    const findGenreIdByName = async (genre: string) => {
        let genre_id: number = 35;
        if(media_type === 'movie') {
            const findedObj = movies_genres_list.find((item) => {item.name === genre})
            findedObj && ( genre_id = findedObj.id )
        }
        if(media_type === 'tv') {
            const findedObj = tvshows_genres_list.find((item) => {item.name === genre})
            findedObj && ( genre_id = findedObj.id )
        }
        return genre_id
    }
    const genre_id = await findGenreIdByName(genre)
    console.log(genre_id)

    const serverResponse = await fetch(`https://api.themoviedb.org/3/discover/${media_type}?language=en-US&page=1&with_genres=${genre_id}`, {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: process.env.TMDB_KEY as string
        }
    })
    if(!serverResponse.ok) throw new Error('Failed to fetch data for Discover movies or TV shows slider')
    // fetch the first 10 results for better app performance (not 20)
    let result: Promise<TrendingResponse> = serverResponse.json()
    const results = (await result).results
    const firstTenResults = results.filter((item, index) => index < 10)

    return firstTenResults
};
