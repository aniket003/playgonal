import React from 'react'

export default function NotFound() {
  return (
    <div className='main-container d-flex flex-column align-content-center p-4 error-page'>
      <h1>Page Not Found</h1>
      <a href="/">
      <button className='btn btn-danger'>Home</button>
      </a>
    </div>
  )
}
