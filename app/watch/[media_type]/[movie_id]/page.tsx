import getTrailerVideoURL from '@/lib/getTrailerVideoURL'
import { IMediaType } from '../../../../types/movies.types'
import ButtonCloseVideo from '@/components/ButtonsComponents/ButtonCloseVideo'
import image from '../../../../public/login_background.jpg'
import Image from 'next/image'
import './watch-page.scss'

async function WatchPage({params}: {params: {media_type: IMediaType, movie_id: number}}) {

    const url = await getTrailerVideoURL(params.media_type, params.movie_id)
    // console.log('TRAILER ==> ', url)

    return (
        <main className="watch-page">
            <Image 
                src={image}
                className='bg-image'
                alt='page bg'
                priority 
                fill
            />
            <div className='watch-content'>
                <ButtonCloseVideo/>
                <div className='video-player'>
                    <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${url}?autoplay=1`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Youtube trailer"
                    />  
                </div>
            </div>
        </main>
    )
}

export default WatchPage;