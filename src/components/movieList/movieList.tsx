'use client'
import React,{useEffect,useState,useRef} from 'react'
import { fetchMovies } from '@/redux/movieSlice'
import { useSelector,useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store'; 
// import Pagination from './pagination';
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
  const maxPages:number = 3 // static for now 
  const movieData = useSelector((state: RootState) => state.movies);
  const loading = movieData?.loading
  const movies = movieData.movies || [] ;
  // const [visibleMovies, setVisibleMovies] = useState<number>(9); 
  // const [pageNumber,setPageNumber] = useState<number>(1)
  const [find,setFind]=useState<string|null>()
  const [filteredMovies,setData]=useState<Movie[]>([])
  const [inputshow,inputActive]=useState<boolean>(false)

  const inputRef = useRef<HTMLInputElement>(null);
  const pageFetched = useRef<number>(1);
  const apiCalled = useRef<boolean>(false); 


  useEffect(() => {
    if(find && !search){
      // fetchData(pageNumber)
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

  useEffect(()=>{
    if (!apiCalled.current) {
      fetchData(pageFetched.current)
      apiCalled.current = true; 
    }
  },[])
  
  useEffect(() => {
    const handleScroll = () => {
      if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 400 
        && !loading 
        && pageFetched.current <= maxPages) {
        fetchData( pageFetched.current)
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);

  }, [loading, movies.length]);
  
  const fetchData=(i:number)=>{
    console.log("calling api",pageFetched.current,maxPages)
    dispatch(fetchMovies(i))
    pageFetched.current += 1
  }

  // const changePage = (i:number) =>{
  //   window.scrollTo(0,0)
  //   setPageNumber(()=>{return i})
  //   setVisibleMovies(()=>{return 9})
  //   fetchData(i)
  // }

  const handleSubmit = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if(!inputshow){
      inputActive(true)
    }
    if(inputRef.current?.value){
      setFind(inputRef.current?.value)
    }
    else{
      setFind(null)
    }
  };

  return (
    <div className='container-fluid'>
      <div className='movie-page-heading' >
        <div>
          <img src={API_ENDPOINT+"Back.png"} onClick={()=>{navigate("/")}} className='back-image'/>
          {search}
        </div>
        <div className='header-item'>
          {inputshow && <input className='input' type='text' ref={inputRef} onClick={()=>{console}}  placeholder='Search...' />}
          <button className=' button' onClick={handleSubmit}> 
            <img src={API_ENDPOINT+"search.png"} className='search-image' />
          </button>
         
        </div>
      </div>
      <Listitem movie={filteredMovies.length>0?filteredMovies:movies} />
      <div className='d-flex justify-content-center'>
        {/* <Pagination page={pageNumber} setPageNumber={(i:number)=>changePage(i)} maxPages={filteredMovies.length>0?1:3}/> */}
      </div>
    </div>
  )
}

export default React.memo(MovieList)