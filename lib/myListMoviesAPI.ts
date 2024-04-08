import type { IResultType } from '@/types/movies.types'
import { db } from '../firebase.config'
import { doc, deleteDoc, getDocs, collection, setDoc } from 'firebase/firestore'

type saveMovieProps = {
    user_id: string
    movie: IResultType
}
type deleteProp = {
    user_id: string
    movie_id_toString: string
}

export async function saveMovieInMyList({user_id, movie}: saveMovieProps) {
    if( user_id ) {
        const docRef = `MY_LIST_${user_id.slice(0, 8)}`
        await setDoc( doc(db, docRef, movie.id.toString()), movie )
    }
};
// user_id passed from Navigation was shorted before passing in MyList
export async function getMyListMovies(user_id: string) {
    if( user_id ) {
        const docRef = `MY_LIST_${user_id}`
        const data = await getDocs(collection(db, docRef))
        const result = await data.docs.map((doc) => ({...doc.data()}))
        return result as IResultType[]
    }
};

export async function deletetMovieFromMyList({user_id, movie_id_toString}: deleteProp) {
    if( user_id ) {
        const docRef = `MY_LIST_${user_id.slice(0, 8)}`
        await deleteDoc(doc(db, docRef, movie_id_toString))
    }
};