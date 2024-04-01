import Container from '@/components/Container/Container'
import MovieCard_MyList from '../../../components/MovieCard/MovieCard_MyList'
import { getMyListMovies } from '@/lib/myListMoviesAPI';
import MyListMovies from '@/components/MyListMovies/MyListMovies';
import type { Full_Media_Types, TotalMovieAndTvshowType, IDiscoverMovieOrTvshow } from '@/types/movies.types'

import './my-list-page.scss'

type myListPageParam = {
    params: { user_id: string }
}

async function MyListPage({params}: myListPageParam) {
    const user_id = params.user_id
    const myListMovies = await getMyListMovies(user_id)
    // console.log(myListMovies)
    if(myListMovies) {
        return (
            <main className='my-list-page'>
                <Container width={1200}>
                    <h1 className='title'>My list movies</h1>
                    <div className='wrapper'>
                        <ul className='my-list-movies'>
                            { myListMovies.map(movie => ( <MovieCard_MyList movie={movie} key={movie.id}/> ))}
                        </ul>
                    </div>
                </Container>
            </main>
        )
    
    }
}

export default MyListPage;