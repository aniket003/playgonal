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
      <tr className='d-flex flex-row justify-content-between'>
          <td>
            <a onClick={changeToggle} className="toggle-btn a-deco">☰</a>
            <a className='brand-container a-deco' href="/">PLAYGONAL</a>
          </td>

      </tr>
    </div>
    <Sidebar show={active} change={()=>changeToggle()}/>
    </>
  )
}

export default Header