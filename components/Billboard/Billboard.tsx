import fetchBillboardData from "@/lib/fetchBillboardData";
import type { TrendingResponse, Response } from '@/types/trending.types'
import GenresList from '../GenresList/GenresList'
import './banner.scss'

async function Biilboard() {
    const data = await fetchBillboardData('all')
    console.log('DATA NUMBER 22--> ', data)

    return (
        <section className='banner-container'>
            <div>
                <div className="banner-content">
                    <h1>{ data.media_type === 'movie' ? data.title : data.name}</h1>
                    <p className='banner-overview'>
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
            </div>
            <div className="black-fog"/>
        </section>    
    )
}

export default Biilboard;
