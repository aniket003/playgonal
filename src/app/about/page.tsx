import PDFViewer from '../../components/PDFViewer'
import React from 'react'

const page:React.FC = async () =>{
  return (
    <div className='main-container'>
    <h1 className='p-2'>ABOUT ME</h1>
    <PDFViewer/>
  </div>
  )
}
export default page