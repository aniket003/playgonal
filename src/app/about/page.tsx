import PDFViewer from '../../components/PDFViewer'
import React from 'react'

const page:React.FC = async () =>{
  const pdfUrl = "/pdf/Aniket_fullstack_4yrs.pdf"
  return (
    <div>
    <h1>My resume</h1>
    <p></p>
    <PDFViewer/>
  </div>
  )
}
export default page