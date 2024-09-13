'use client'
import React,{useEffect,useState,useRef} from 'react'
import { fetchMovies } from '@/redux/movieSlice'
import { useSelector,useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store'; 
import Pagination from './pagination';
import Listitem from '../Videolist/Listitem';
import { API_ENDPOINT } from '../constant';
import useNavigate from '../Hooks/useNavigate';
interface Movie {
  "poster-image": string;
  "name":string
}
interface Props {
  search:string | null ;
}
const MovieList:React.FC<Props> = (props) => {
  const {search}=props
  const { navigate } = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const movieData = useSelector((state: RootState) => state.movies);
  const movies = movieData?.movies?.[0]?.page?.["content-items"].content || [] ;
  const [visibleMovies, setVisibleMovies] = useState<number>(9); 
  const [find,setFind]=useState<string|null>()
  const [pageNumber,setPageNumber] = useState<number>(1)
  const [filteredMovies,setData]=useState<Movie[]>([])
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputshow,inputActive]=useState<boolean>(false)
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
    if(!inputshow){
      inputActive(true)
    }
    e.preventDefault()
    if(inputRef.current?.value){
      setFind(inputRef.current?.value)
    }
    else{
      setFind(null)
    }
  };

  return (
    <div className='container'>
      <div className='movie-page-heading mt-1' >
        <div>
          <img src={API_ENDPOINT+"Back.png"} onClick={()=>{navigate("/")}} className='back-image'/>
          {search}
        </div>
        <div className='header-item'>
          {inputshow && <input className='input' type='text' ref={inputRef} onClick={()=>{console}}  placeholder='Search...' />}
          <button className=' button' onClick={handleSubmit}> <img src={API_ENDPOINT+"search.png"} className='search-image' /></button>
        </div>
      </div>
      <Listitem movie={filteredMovies.length>0?filteredMovies.slice(0,visibleMovies):movies?.slice(0,visibleMovies)} />
      <div className='d-flex justify-content-center'>
        <Pagination page={pageNumber} setPageNumber={(i:number)=>changePage(i)} maxPages={filteredMovies.length>0?1:3}/>
      </div>
    </div>
  )
}

export default React.memo(MovieList)