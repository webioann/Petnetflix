import type { TrendingResponse, TrendingMovie } from '@/types/trending.types'

type Media_Type = 'all' | 'tv' | 'movie'

export default async function fetchBillboardData() {

    const media: Media_Type = 'all'

    const response = await fetch(`https://api.themoviedb.org/3/trending/${media}/week?api_key=${process.env.TMDB_API_KEY}?language=en-US&page=1`, {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: process.env.TMDB_KEY as string
        }
    })
    if(!response.ok) throw new Error('Failed to fetch data for Billboard')
    let result: Promise<TrendingResponse> = response.json()
    let random = Math.floor(Math.random() * 20)
    return random
};

