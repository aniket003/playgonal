import React from 'react'

const VideoList:React.FC<any> = ({data,title}) => {
  return (
    <div className='container d-flex flex-column'>
        <div className='heading m-0 mt-2 align-center d-flex flex-row justify-content-between'>
            <p>{title}</p>
            <p className=''><i className="fas fa-angle-right"></i></p>
        </div>
        <div className='d-flex flex-row'>
            {data.map((movie,i)=>(
                <div className='col-4' key={i}>
                     <div className="image-container">
                        <img className="responsive-image" src={process.env.REACT_APP_ENDPOINT_IMAGE+movie["poster-image"]} />
                    </div>
                </div>
            ))}
        </div>
        
    </div>
  )
}

export default VideoList