'use client'
import React,{useState,useEffect} from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';

const menuItems:string[] = [
  'Home',
  'My List',
  'Hindi Movies',
  'Children & Family',
  'International Movies',
  'Malayalam',
  'Thrillers',
  'Reality Show',
  'Anime',
  'Sci-Fi',
  'Comedies',
  'Sci-Fi',
  'Thrillers',
  'Horror',
  'Comedies'
];


type SidebarProps = {
  show: boolean;
  change: () => void;
};

const Sidebar:React.FC<SidebarProps>=({show,change})=>{
  const router = useRouter()
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const navigate = (url: string) => {
    if (isClient) {
      change()
      router.push(url);
    }
  };
  return (
    <div>
      {show && <div className='slider-backround' onClick={change}></div>}
      <div className={`sidebar col-4 ${show&&'open'}`}>
       <ol className=' list m-0 p-0'>
        <li className='menu-item d-flex flex-row'>
          <Image src="/images/user.png" alt="My Image" width={30} height={30} />
          <p className='mb-0 menu-item'>Aniket</p>
        </li>
        <li className='menu-item' onClick={()=>navigate('/about')}>About</li>
        <li className='menu-item '>Sign out</li>
       </ol>
       <ol className='list m-0 p-0 mt-2'>
        {menuItems.map((item:string,i:number)=>(
          <li className='menu-item' key={i} onClick={()=>navigate('browse/?query='+item)}>{item}</li>
        ))}
       </ol>
      </div>

  </div>
  )
}

export default Sidebar
