import type { IVideoDataResponse } from "@/types/video.types"
import { Media_Type } from '../types/discover.types';

export default async function getTrailerVideoURL(media_type: Media_Type, movie_id: number) {

    const serverResponse = await fetch(`https://api.themoviedb.org/3/${media_type}/${movie_id}/videos?language=en-US`, {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: process.env.TMDB_KEY as string
        }
    })
    if(!serverResponse.ok) throw new Error('Failed to fetch data for YouTube trailer URL')
    let response: Promise<IVideoDataResponse> = serverResponse.json()

    const results = (await response).results
    console.log('RESPONSE --->', results)

    const index = results.findIndex((element ) => element.type === 'Trailer')
    const key = results[index]?.key
    
    return key
};
