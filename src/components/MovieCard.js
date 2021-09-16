import React from 'react'
import StartRating from './StartRating'

const MovieCard = ({movie}) => {
    return (
        <div className='movie-card'>
           <StartRating rate={movie.rating} />
            <img src={movie.image} alt="" />
            <h1>{movie.name} </h1>
            <p>{movie.date} </p>
        </div>
    )
}

export default MovieCard
