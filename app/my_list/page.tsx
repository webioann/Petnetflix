import Container from '@/components/Container/Container';
import MyListMovies from '@/components/MyListMovies/MyListMovies';
import './my-list-page.scss'

function MyListPage() {
    return (
        <main className='my-list-page'>
            <Container width={1200}>
                <h1 className='title'>My list movies</h1>
                <MyListMovies/>
            </Container>
        </main>
    )
}

export default MyListPage;