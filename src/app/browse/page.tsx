"use client"
import React from 'react'
import { useSearchParams } from 'next/navigation';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import MovieList from '@/components/movieList/movieList';
import Head from 'next/head';

const page = () => {
    const searchParams = useSearchParams();
    const search: string | null = searchParams.get('query');
    const find: string | null = searchParams.get('search');
    return (
        <>
        <Head>
        <title>{search} - playgomal</title>
        <meta name="description" content="This is my awesome Next.js page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
       </Head>
        <Provider store={store}>
            <div className='main-container'>
                <MovieList search={search} find={find} />    
            </div>
        </Provider>
        </>
    )
}

export default page