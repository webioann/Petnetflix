import Container from '@/components/Container/Container'
import MovieCard from '../../../components/MovieCard/MovieCard'
import { getMyListMovies } from '@/lib/myListMoviesAPI';
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
                            { myListMovies.map(movie => ( <MovieCard movie={movie} key={movie.id} useIn='my-list'/> ))}
                        </ul>
                    </div>
                </Container>
            </main>
        )
    
    }
}

export default MyListPage;