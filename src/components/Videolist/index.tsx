'use client'
import React,{useEffect,useState} from 'react'
import { useRouter } from 'next/navigation';
import { API_ENDPOINT } from '../constant';

interface Movie {
    "poster-image": string;
}
interface VideoListProps {
    data: Movie[];
    title: string;
}


const VideoList:React.FC<VideoListProps> = ({data,title}) => {
  const router = useRouter()
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const navigate = (url: string) => {
      router.push('/browse?query='+url);
  }
  
  return (
    <div className='container d-flex flex-column'>
        <div className='heading m-0 mt-2 align-center d-flex flex-row justify-content-between' onClick={()=>navigate(title)}>
          <p>{title}</p>
          <p className=''><i className="fas fa-angle-right"></i></p>
        </div>
        <div className='d-flex flex-row'>
          {data.map((movie:Movie,i:number)=>(
            <div className='col-4' key={i}>
              <div className="image-container">
                <img 
                  className="responsive-image" 
                  src={API_ENDPOINT+movie["poster-image"]} />
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default VideoList