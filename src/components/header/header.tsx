import React from 'react'

export default function Header() {

  function handleClick(): void {
    throw new Error('Function not implemented.')
  }

  return (
    <nav className="relative container mx-auto p-6">

      <div className="flex items-center justify-between">

        <div className="pt-2">
          <img src="img/logo.svg" alt="" />
        </div>

        <div className="hidden space-x-6 md:flex">
          <a href="#" className="hover:text-[#155e75]">Pricing</a>
          <a href="#" className="hover:text-[#155e75]">Product</a>
          <a href="#" className="hover:text-[#155e75]">About Us</a>
          <a href="#" className="hover:text-[#155e75]">Careers</a>
          <a href="#" className="hover:text-[#155e75]">Community</a>
        </div>

        <button className="p-3 px-6 pt-2 text-black bg-[#ddd6fe] rounded-full baseline hover:bg-brightRedLight md:block"
        >Get Started</button>


        <button
          id="menu-btn"
          className="block hamburger md:hidden focus:outline-none"
          title='ham'
          onClick={() => handleClick()}
        >
          <div className="space-y-2">
            <span className="block w-8 h-0.5 bg-gray-600"></span>
            <span className="block w-6 h-0.5 bg-gray-600"></span>
            <span className="block w-4 h-0.5 bg-gray-600"></span>
          </div>

        </button>
      </div>
      <div className="md:hidden">
        <div
          id="menu"
          className="absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
        >
          <a href="#">Pricing</a>
          <a href="#">Product</a>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Community</a>
        </div>
      </div>
    </nav>
  )
}
