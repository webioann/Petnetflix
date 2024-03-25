'use client'
import React, { useState, useEffect, useRef } from 'react'
// import { useLocation } from 'react-router-dom';
import { IMovie } from '../../types/movies.types'
import { GoSearch } from 'react-icons/go'
import { IoClose } from 'react-icons/io5'
import './search-bar.scss'

const SearchBar = () => {

    const [barIsActive, setBarIsActive] = useState(false)
    const [renderThisComponent, setRenderThisComponent] = useState(true)
    const [value, setValue] = useState('')
    const [searchResults, setSearchResults] = useState<IMovie[] | null>(null)
    const [searchQuery, setSearchQuery] = useState<string | null>(null)
    // const [ fetchSearchMovies, { data: movies } ] = useLazySearchMovieQuery()
    // let location = useLocation(); 
    const inputRef = useRef<HTMLInputElement>(null)

    // useEffect(() => {
    //     // if have result from server will put in him in redux state
    //     movies && dispatch(setSearchResults(movies))
    // }, [movies])

    useEffect(() => { 
        // reset SearchBar state if page changed
        setSearchResults(null)
        setValue('')
        setBarIsActive(false)
    }, [])
    
    useEffect(() => {
        // prohibits searching when on the pages Account, My List 
        if(location.pathname === "/my_list") {
            setRenderThisComponent(false)
        }
        else if(location.pathname === "/account") {
            setRenderThisComponent(false)
        }
        else { setRenderThisComponent(true) }
    }, [])

    const onClickSearchIcon = () => {
        if( value.length == 0 ) {
            setSearchResults(null)
            setSearchQuery(null)
        }
        // on first click by icon button
        if(  value.length < 3 ) {
            setBarIsActive(true)
            inputRef.current?.focus()
            // reseting searchResults before new searching
            setSearchResults(null)
            // reseting search query before insert new search query
            setSearchQuery(null)
        }
        // on second click with not empty input field
        if(  value.length >= 3 ) {
            // start searching ({ search: value })
            // fetchSearchMovies({ search: value })
            // save search qury on redux
            setSearchQuery(value)
            inputRef.current?.blur()
            // setBarIsActive(false)
            setValue('')
        }
    }

    if( renderThisComponent ) {
        return (
            <div className={barIsActive ? 'search-bar' : 'shorted-search-bar'}>
                <GoSearch 
                    size={24}
                    color='#fff'
                    className='search-icon'
                    onClick={onClickSearchIcon}
                />
                <input 
                    className='search-input'
                    placeholder='Title, people, genres...'
                    type='text'
                    ref={inputRef}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <IoClose 
                    onClick={() => {
                        setValue('')
                        setBarIsActive(false)
                        setSearchQuery(null)
                        setSearchResults(null)
                    }}
                    className='close-input'
                    color='#fff' 
                    size={24}
                    />
            </div>
        )
    } else { return null }
}

export default SearchBar;