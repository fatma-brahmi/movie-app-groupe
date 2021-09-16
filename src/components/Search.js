import React from 'react'
import StartRating from './StartRating'

const Search = ( {searchvalue,handelsearchvalue ,handelrate,rate}) => {

    return (
        <div className='header-container'>
            <h1>Movie APP F3</h1>
            <div className='search-container'>
    <input type="text" onChange={handelsearchvalue} className='inp' value={searchvalue} />
    <StartRating handelrate={handelrate} rate={rate} />
    </div>
        </div>
    )
}

export default Search
