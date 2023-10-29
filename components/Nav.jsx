import React from 'react'
import NavbarLayout from './NavbarLayout'

export default function Nav() {
  return (
    <>
      <div id='navbar' className='text-center fixed w-[100%] top-0 block'>

        {/* Title + Logo Section */}
        <div className='bg-[#9782ff] flex justify-center'>
          
          <a href="http://localhost:3001/"><img className='mb-[-20px]py-3 mt-1' src="/logo.png" alt="logo" width={"200px"} />
         
          </a>

        </div>


        {/* Navigation Section */}

        <ul className='border-solid border-2 border-[#c9beff] inline-flex gap-3 sm:px-8 md:px-14 rounded-xl bg-[#5d46d4]'>

          <a href="http://localhost:3001/"><li className='text-white hover:bg-[#9782ff] rounded-xl py-1 md:px-8 px-3 font-bold hover:ease-in-out duration-300 hover:cursor-pointer'>Home</li> </a>
          <a href="/page/about"><li className='text-white hover:bg-[#9782ff] rounded-xl py-1 md:px-8 px-3 font-bold hover:ease-in-out duration-300 hover:cursor-pointer'>About</li> </a>
          <a href="/page/ourmission"><li className='text-white hover:bg-[#9782ff] rounded-xl py-1 md:px-8 px-3 font-bold hover:ease-in-out duration-300 hover:cursor-pointer'>Our Mission</li> </a>

        </ul>
        <NavbarLayout />





      </div>
    </>
  )

}