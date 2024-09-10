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
      <tr className="container-fluid">
          <td>
            <a onClick={changeToggle} className="toggle-btn a-deco">☰</a>
            <a className='brand-container a-deco'>PLAYGONAL</a>
          </td>
      </tr>
    </nav>
    <Sidebar show={active}/>
    </>
  )
}
