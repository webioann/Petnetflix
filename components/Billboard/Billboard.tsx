import fetchBillboardData from "@/lib/fetchBillboardData"
import Image from "next/image"
import type { TrendingResponse, Response } from '@/types/trending.types'
import type { Media_Type } from '@/types/app.types'
import Container from "../Container/Container";
import GenresList from '../GenresList/GenresList'
import './billboard.scss'

async function Biilboard({media_type}: {media_type: Media_Type}) {

    const data = await fetchBillboardData(media_type)
    console.log('DATA NUMBER 22--> ', data)
    const imageSrc = `https://image.tmdb.org/t/p/original/${data.backdrop_path}`

    return (
        <section className='banner-container'>
            <Image 
                src={imageSrc}
                style={{objectFit: 'cover'}} 
                fill
                priority 
                alt="Banner image"
            />
            <Container width='1400'>
                <div className="banner-content">
                    <h1 className='movie-name'>{ data.media_type === 'movie' ? data.title : data.name}</h1>
                    <p className='movie-overview'>
                        { data.overview.length > 150 ? data.overview.substring(0, 150 - 1) + ' ...' : data.overview }
                    </p> 
                    <GenresList genres={data.genre_ids} font={16}/>
                    <div className="banner-buttons-row">
                        {/* <Button_PlayVideo title='Play' videoParam={{movie_id: movie.id, media_type: media}} variant='square'/>
                        <Button_SaveInMyList title='My List' movie={movie} />
                        <Button_MoreInfo/> */}
                        <div className="spring-div" style={{ flex: 1 }}/> 
                    </div>
                </div>
            </Container>
            <div className="black-fog"/>
        </section>    
    )
}

export default Biilboard;
