"use client"
import React, { useState } from 'react'
import Sidebar from '../Sidebar'


export default function Header() {
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
          <td className='header-item'>
            <input className='input' type='text' placeholder='Search...' />
          </td>
      </tr>
    </div>
    <Sidebar show={active} change={()=>changeToggle()}/>
    </>
  )
}
