import getTrailerVideoURL from '@/lib/getTrailerVideoURL'
import { Media_Type } from '../../../../types/discover.types'
import Button_CloseVideo from '@/components/ButtonsComponents/Button_CloseVideo'
import image from '../../../public/login_background.jpg'
import Image from 'next/image'
import Container from '@/components/Container/Container'
import './search-page.scss'


async function SearchPage({params}: {params: {search_query: string}}) {

    return (
        <main className="search-page">
            <Container width={1400}>
                <h1 className='title'>{params.search_query}</h1>

            </Container>
        </main>
    )
}

export default SearchPage;