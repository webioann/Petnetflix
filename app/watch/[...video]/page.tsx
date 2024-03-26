import getTrailerVideoURL from '@/lib/getTrailerVideoURL'
import { Media_Type } from '../../../types/video.types';
import './watch-page.scss'

type VideoParams = {
    video: [ Media_Type, number ]
}

async function WatchPage({params}: {params: VideoParams}) {
    const media_type = params.video[0]
    const movie_id = params.video[1]
    // const url = await getTrailerVideoURL({media_type, movie_id})

    console.log('URL ---> ', media_type, movie_id)
    return (
        <main className="watch-page">
            <h1>WATCH PAGE</h1>
        </main>
    )
}

export default WatchPage;