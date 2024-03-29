import searchMovieAndTvshow from '@/lib/searchMovieAndTvshow'
import { Media_Type } from '../../../../types/discover.types'
import Button_CloseVideo from '@/components/ButtonsComponents/Button_CloseVideo'
import image from '../../../public/login_background.jpg'
import Image from 'next/image'
import Container from '@/components/Container/Container'
import MovieCard_Searching from '@/components/MovieCard/MovieCard_Searching'
import './search-page.scss'


async function SearchPage({params}: {params: {search_query: string}}) {

    const searching_results = await searchMovieAndTvshow(params.search_query)
    console.log("SEARCH ===> ",searching_results)

    return (
        <main className="search-page">
            <Container width={1400}>
                <section className='titles'>
                    <span className='explore'>Explore titles related to: </span>
                    <ul className='searched-names'>
                        {searching_results.map(item => (
                            <span key={item.id} className='name-item'>
                                { item.media_type === 'movie' ? item.title : item.name }
                            </span>
                        ))}
                    </ul>
                </section>
            </Container>
            <Container width={1500}>
                <div className='wrapper'>
                    <ul className='list-searched-movies'>
                        { searching_results.map(movie => ( <MovieCard_Searching movie={movie} key={movie.id}/> ))}
                    </ul>
                </div>
            </Container>
        </main>
    )
}

export default SearchPage;