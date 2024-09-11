import React from 'react'

interface Movie {
  "poster-image": string;
  "name":string
}
interface Prop{
  movie:[
    {"poster-image": string;
    "name":string}
  ]
}
const Listitem = (prop:Prop) => {
  const {movie}=prop
  return (
    <div className='d-flex row'>
      {movie?.map((movie:Movie, index:number) => (
        <div className='col-4 p-0' key={index}>
          <div className="image-container">
          <img className="responsive-image" src={"https://test.create.diagnal.com/images/"+movie["poster-image"]} />
          </div>
          <p className='movie-title'>{movie.name}</p>
        </div>
      ))}
    </div>
  )
}
export default Listitem