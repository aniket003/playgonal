'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router';

type SidebarProps = {
  show: boolean;
  change: () => void;
};

const Sidebar:React.FC<SidebarProps>=({show,change})=>{
  const router = useRouter()

  const navigate = (url:string) => {
    router.push('url');
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
        <li className='menu-item actived'>Home</li>
        <li className='menu-item '>My List</li>
        <li className='menu-item '>Hindi Movies</li>
        <li className='menu-item '>Children & Family</li>
        <li className='menu-item '>International Movies</li>
        <li className='menu-item '>Malayalam</li>
        <li className='menu-item '>Thrillers</li>
        <li className='menu-item '>Reality Show</li>
        <li className='menu-item '>Anime</li>
        <li className='menu-item '>Sci-Fi</li>
        <li className='menu-item '>Comedies</li>
        <li className='menu-item '>Sci-Fi</li>
        <li className='menu-item '>Thrillers</li>
        <li className='menu-item '>Horror</li>
        <li className='menu-item '>Comedies</li>

       </ol>
      </div>

  </div>
  )
}

export default Sidebar
