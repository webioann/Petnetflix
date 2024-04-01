import searchMovieAndTvshow from '@/lib/searchMovieAndTvshow'
import Container from '@/components/Container/Container'
import MovieCard_Searching from '@/components/MovieCard/MovieCard_Searching'
import './search-page.scss'

async function SearchPage({params}: {params: {search_query: string}}) {

    const searching_results = await searchMovieAndTvshow(params.search_query)
    // console.log("SEARCH ===> ",searching_results)

    return (
        <main className="search-page">
            <Container width={1200}>
                <section className='titles'>
                    <span className='explore'>Explore titles related to: </span>
                    { searching_results.length == 0 && <p>Movies by query "{params.search_query}" not found. </p> }
                    <ul className='searched-names'>
                        {searching_results.map(item => (
                            <span key={item.id} className='name-item'>
                                { item.media_type === 'movie' ? item.title : item.name }
                            </span>
                        ))}
                    </ul>
                </section>
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