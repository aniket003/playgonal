import React from 'react'

const data=[
  "Terms of Use",
  "Privacy Statment",
  "Cookie Prefrence",
  "Help Center"
]

export default function Footer() {
  return (
    <div className='footer d-flex flex-column mt-4'>
      <a className='brand-footer brand-container  a-deco'>PLAYGONAL</a>
      <ol className=' m-0 p-0 mt-2'>
        {data.map((option,i)=>(
          <li className='menu-item p-0' key={i}>{option}</li>
        ))}
      </ol>
      <small className='rights'>All rights reserved @playgonal 2024</small>
    </div>
  )
}
