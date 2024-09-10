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
    <nav className="header">
      <tr className="">
          <td>
            <a onClick={changeToggle} className="toggle-btn a-deco">☰</a>
            <a className='brand-container a-deco' href="/">PLAYGONAL</a>
          </td>
          <td>
            <a className='menu-item' href="/about">About</a>
            <input className='input' defaultValue={"Search..."}/>
          </td>
      </tr>
    </nav>
    <Sidebar show={active} change={()=>changeToggle()}/>
    </>
  )
}
