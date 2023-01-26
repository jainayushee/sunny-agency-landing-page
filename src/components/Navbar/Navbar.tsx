import React from 'react'

export default function Navbar () {
  function handleClick (): void {
    throw new Error('Function not implemented.')
  }

  return (
    <nav className='pt-4 px-4'>
      <div className='flex items-center justify-between'>
        <div className='pt-2 text-white text-3xl'>
          sunnyside
        </div>
        <div className='hidden space-x-6 md:flex items-center text-white'>
          <a href='#' className='hover:text-[#155e75]'>About</a>
          <a href='#' className='hover:text-[#155e75]'>Services</a>
          <a href='#' className='hover:text-[#155e75]'>Projects</a>
          <button className='p-3 px-6 pt-2 text-black bg-white rounded-full baseline hover:bg-brightRedLight md:block'
            >Contact</button>
        </div>

        <button
          id='menu-btn'
          className='block hamburger md:hidden focus:outline-none'
          title='ham'
          onClick={() => handleClick()}
            >
          <div className='space-y-2'>
            <span className='block w-8 h-0.5 bg-gray-600' />
            <span className='block w-6 h-0.5 bg-gray-600' />
            <span className='block w-4 h-0.5 bg-gray-600' />
          </div>

        </button>
      </div>
      <div className='md:hidden'>
        <div
          id='menu'
          className='absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md'
            >
          <a href='#'>Pricing</a>
          <a href='#'>Product</a>
          <a href='#'>About Us</a>
          <a href='#'>Careers</a>
          <a href='#'>Community</a>
        </div>
      </div>
    </nav>
  )
}
