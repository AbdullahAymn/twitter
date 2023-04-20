import Link from 'next/link'
import React from 'react'

export default function Err() {
  return (
    <div className='p-5 h-screen w-full flex items-center justify-center '>
      <div className='p-8 shadow-xl rounded-xl text-center'>
      <h1 className='text-xl font-sans font-bold p-2'>Page not found</h1>
        <Link href='/'><p className='bg-twitter text-gray-200 py-2 px-4 rounded-full w-fit mx-auto'>Go to Home</p></Link>
        </div>
      
    </div>
  )
}
