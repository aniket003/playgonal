import PDFViewer from '../../components/PDFViewer'
import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me - Playgonal",
  description: "Dynamic Full Stack Developer with 4 Years of Proven Experience in Driving Technological Innovation. Expert in building scalable web applications and integrating AI/ML technologies. Skilled in leading cross-functional teams from concept to deployment, enhancing user experiences through innovative solutions. Committed to delivering impactful, user-centric applications that align with business goals.",
};
const page:React.FC = async () =>{
  return (
    <div className='main-container'>
    <h1 className='p-2'>ABOUT ME</h1>
    <PDFViewer/>
  </div>
  )
}
export default page