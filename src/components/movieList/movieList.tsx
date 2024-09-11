'use client'
import React,{useEffect,useState} from 'react'
import { fetchMovies } from '@/redux/movieSlice'
import { useSelector,useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store'; 
import Pagination from './pagination';
import Listitem from '../Videolist/Listitem';

interface Movie {
  "poster-image": string;
  "name":string
}

const MovieList:React.FC<any> = (search,find) => {
  const dispatch: AppDispatch = useDispatch();
  const movieData = useSelector((state: RootState) => state.movies);
  const movies = movieData?.movies?.[0]?.page?.["content-items"].content || [] ;
  const [visibleMovies, setVisibleMovies] = useState<number>(9); 
  const [pageNumber,setPageNumber] = useState<number>(1)
  const [filteredMovies,setData]=useState<any>([])
  

  useEffect(() => {
    if(find && movies.length>0){
      const filteredMovies = movies.filter((movie: Movie) =>
      movie.name.toLowerCase().includes(find?.toLowerCase())
    )
    setData(filteredMovies)
    }
  }, [find])
  

  useEffect(() => {
    fetchData()
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 600) {
        setVisibleMovies((prevVisibleMovies) => prevVisibleMovies + 3); 
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const fetchData=()=>{
    dispatch(fetchMovies(pageNumber))
  }
  
  useEffect(() => {
    window.scrollTo(0,0)
    setVisibleMovies((prev)=>{return 9})
    fetchData()
  }, [pageNumber])

  console.log(filteredMovies)
  return (
    <div className='container'>
      <h1 className='movie-page-heading'>{search.search}</h1>
      <Listitem movie={filteredMovies.length>0?filteredMovies.slice(0,visibleMovies):movies?.slice(0,visibleMovies)} />
      <div className='d-flex justify-content-center'>
        <Pagination page={pageNumber} setPageNumber={(i:number)=>setPageNumber(i)}/>
      </div>
    </div>
  )
}

export default MovieList