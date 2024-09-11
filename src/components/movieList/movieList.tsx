'use client'
import React,{useEffect,useState,useRef} from 'react'
import { fetchMovies } from '@/redux/movieSlice'
import { useSelector,useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store'; 
import Pagination from './pagination';
import Listitem from '../Videolist/Listitem';

interface Movie {
  "poster-image": string;
  "name":string
}
interface Props {
  search:string | null ;
}
const MovieList:React.FC<Props> = (props) => {
  const {search}=props
  const dispatch: AppDispatch = useDispatch();
  const movieData = useSelector((state: RootState) => state.movies);
  const movies = movieData?.movies?.[0]?.page?.["content-items"].content || [] ;
  const [visibleMovies, setVisibleMovies] = useState<number>(9); 
  const [find,setFind]=useState<string|null>()
  const [pageNumber,setPageNumber] = useState<number>(1)
  const [filteredMovies,setData]=useState<Movie[]>([])
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if(find && !search){
      fetchData(pageNumber)
      setVisibleMovies(9)
    }
    let filteredMovies:Movie[]=[]
    if(find && movies.length>0){
      filteredMovies = movies.filter((movie: Movie) =>
      movie.name.toLowerCase().includes(find?.toLowerCase()))
      setData(filteredMovies)
    }
    else if(find == null){
      filteredMovies = []
      setData(filteredMovies)
    }
  }, [find])

  useEffect(() => {
    fetchData(pageNumber)
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 600) {
        setVisibleMovies((prevVisibleMovies) => prevVisibleMovies + 3); 
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const fetchData=(i:number)=>{
    dispatch(fetchMovies(i))
  }

  const changePage = (i:number) =>{
    window.scrollTo(0,0)
    setPageNumber(()=>{return i})
    setVisibleMovies(()=>{return 9})
    fetchData(i)
  }

  const handleSubmit = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if(inputRef.current?.value){
      setFind(inputRef.current?.value)
    }
    else{
      setFind(null)
    }
  };
  const handleSubmitCancel = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setFind(null)
    if (inputRef.current) { inputRef.current.value = '' }
  };
  return (
    <div className='container'>
      
      <h1 className='movie-page-heading'>{search}</h1>
      <div className='d-flex flex-row header-item'>
            <input className='input' type='text' ref={inputRef}  placeholder='Search...' />
            <button className='btn btn-dark button' onClick={handleSubmit}> Search</button>
            <button className='btn btn-dark button' onClick={handleSubmitCancel}> Cancel</button>

        </div>
      <Listitem movie={filteredMovies.length>0?filteredMovies.slice(0,visibleMovies):movies?.slice(0,visibleMovies)} />
      <div className='d-flex justify-content-center'>
        <Pagination page={pageNumber} setPageNumber={(i:number)=>changePage(i)} maxPages={filteredMovies.length>0?1:3}/>
      </div>
    </div>
  )
}

export default MovieList