'use client'
import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import Container from '@/components/Container/Container'
import MovieCard_Searching from '@/components/MovieCard/MovieCard_Searching'
import { db } from '../../firebase.config'
import { doc, deleteDoc, getDocs, collection } from 'firebase/firestore'
import { TrendingMoviesType } from '@/types/movies.types' 
import './my-list.scss'

async function MyListMovies() {

    const { user } = useContext(UserContext)
    const [myListMovies, setMyListMovies] = useState<TrendingMoviesType[]>([])

    useEffect(() => {
        if( user?.user_id ) {
            const docRef = `MY_LIST_${user?.user_id.slice(0, 8)}`
            const fetchMyList = async () => {
                const data = await getDocs(collection(db, docRef))
                let raw = data.docs.map((doc) => ({...doc.data()}))
                setMyListMovies(raw as TrendingMoviesType[])
            }
            fetchMyList();
        }
    }, [])

    return (
        <Container width={1200}>
        <div className='wrapper'>
            <ul className='my-list-movies'>
                { myListMovies.map(movie => ( <MovieCard_Searching movie={movie} key={movie.id}/> ))}
            </ul>
        </div>
    </Container>
    )
}

export default MyListMovies;