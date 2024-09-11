import React from 'react'
import { API_ENDPOINT } from '../constant';

interface Movie {
  "poster-image": string;
  "name": string;
}
interface Prop {
  movie: Movie[];  // Define movie as an array of Movie objects
}
const Listitem = (prop:Prop) => {
  const {movie}=prop
  return (
    <div className='d-flex row'>
      {movie?.map((movie:Movie, index:number) => (
        <div className='col-4 p-0' key={index}>
          <div className="image-container">
          <img className="responsive-image"
               src={API_ENDPOINT+movie["poster-image"]} 
               alt={movie?.name}
               onError={({ currentTarget }) => {
                currentTarget.onerror = null; 
                currentTarget.src=API_ENDPOINT+"placeholder_for_missing_posters.png";
              }}/>
          </div>
          <p className='movie-title'>{movie.name}</p>
        </div>
      ))}
    </div>
  )
}
export default Listitem