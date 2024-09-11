"use client"
import React, { useState ,useRef} from 'react'
import Sidebar from '../Sidebar'
import { useRouter } from 'next/navigation';


const Header:React.FC=()=>{
  const [active,setActive]=useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter()

  const changeToggle=()=>{
    setActive((prev)=>{
      return !prev
    })
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputRef?.current?.value );
    router.push(window.location.href+'&search='+inputRef?.current?.value);
  };
 
  return ( 
    <> 
    <div className="header">
      <tr className='d-flex flex-row justify-content-between'>
          <td>
            <a onClick={changeToggle} className="toggle-btn a-deco">☰</a>
            <a className='brand-container a-deco' href="/">PLAYGONAL</a>
          </td>
          <td className='header-item'>
            <form onSubmit={handleSubmit}>
            <input className='input' type='text' ref={inputRef}  placeholder='Search...' />
            </form>
          </td>
      </tr>
    </div>
    <Sidebar show={active} change={()=>changeToggle()}/>
    </>
  )
}

export default Header