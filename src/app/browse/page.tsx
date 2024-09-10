"use client"
import React from 'react'
import { useSearchParams } from 'next/navigation';


const page = () => {
    const searchParams = useSearchParams();
    const filter = searchParams.get('search'); // Access query param 'filter'
    console.log(filter)
    return (
        <div className='main-container'>
            <div className='page-heading'>

            </div>
        </div>
    )
}

export default page