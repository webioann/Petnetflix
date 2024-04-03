import fetchBillboardData from "@/lib/fetchBillboardData"
import Image from "next/image"
import type { IMediaType } from '@/types/movies.types'
import Container from "../Container/Container"
import ButtonMoreInfo from "../ButtonsComponents/ButtonMoreInfo"
import ButtonPlayVideo from "../ButtonsComponents/ButtonPlayVideo"
import ButtonSaveInMyList from "../ButtonsComponents/ButtonSaveInMyList"
import GenresListRow from "../GenresList/GenresListRow" 
import './billboard.scss'

async function Biilboard({media_type}: {media_type: IMediaType}) {

    const data = await fetchBillboardData(media_type) 
    // console.log('BIILBOARD ==> ', data)

    return (
        <section className='banner-container'>
            <Image 
                src={`https://image.tmdb.org/t/p/original/${data.backdrop_path ? data.backdrop_path : data.poster_path}`}
                style={{objectFit: 'cover'}} 
                fill
                priority 
                alt="Banner image"
            />
            <Container width={1400}>
                <div className="banner-content">
                    <h1 className='movie-name'>{ "title" in data ? data.title : data.name }</h1>
                    <p className='movie-overview'>
                        { data.overview.length > 150 ? data.overview.substring(0, 150 - 1) + ' ...' : data.overview }
                    </p> 
                    <GenresListRow genres={data.genre_ids} font_size={16}/>
                    <div className="banner-buttons-row">
                        <ButtonPlayVideo media_type={media_type} movie_id={data.id} variant='square'/>
                        <ButtonSaveInMyList title='My List' movie={data} media_type={media_type} icon_size={25}/>
                        <ButtonMoreInfo/>
                        <div className="spring-div" style={{ flex: 1 }}/> 
                    </div>
                </div>
            </Container>
            <div className="black-fog"/>
        </section>    
    )
}

export default Biilboard;
