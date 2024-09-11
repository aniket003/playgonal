"use client"
import React, { useState} from 'react'
import Sidebar from '../Sidebar'


const Header:React.FC=()=>{
  const [active,setActive]=useState<boolean>(false)
  const changeToggle=()=>{
    setActive((prev)=>{
      return !prev
    })
  }

  return ( 
    <> 
    <div className="header">
      <div className='d-flex flex-row justify-content-between'>
          <div>
            <a onClick={changeToggle} className="toggle-btn a-deco">☰</a>
            <a className='brand-container a-deco' href="/">PLAYGONAL</a>
          </div>

      </div>
    </div>
    <Sidebar show={active} change={()=>changeToggle()}/>
    </>
  )
}

export default Header