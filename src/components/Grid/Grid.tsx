import React from 'react'

export default function RowOne () {
  return (
    <>
      <div className='flex lg:flex-row flex-col-reverse'>
        <div className='lg:basis-6/12'>
          <div className='h-full flex flex-col items-start justify-center px-20 lg:pt-0 py-48'>
            <h1 className='text-[#23303e] leading-8 pb-5'
              style={{ fontWeight: '900', fontSize: '2rem' }}>Transform your brand</h1>

            <p style={{ fontFamily: '"Barlow", sans-serif' }} className='pb-5'>
              We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.
            </p>

            <a href='#' className='uppercase' >Learn More</a >
            <div className='cursor-pointer h-2 w-28 bg-[#fad400] rounded-md opacity-40 hover:opacity-80' />
          </div>
        </div>
        <div className='basis-6/12'>
          <img src='img/image-transform.jpg' />
        </div>
      </div>
      <div className='flex lg:flex-row flex-col'>
        <div className='lg:basis-6/12 basis-full'>
          <img src='img/image-stand-out.jpg' />
        </div>
        <div className='lg:basis-6/12'>
          <div className='h-full flex flex-col items-start justify-center px-20 lg:pt-0 py-48'>
            <h1 className='text-[#23303e] leading-8 pb-5' style={{ fontWeight: '900', fontSize: '2rem' }}>Stand out to the right audience</h1>

            <p style={{ fontFamily: '"Barlow", sans-serif' }} className='pb-5'>
              Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.
            </p>

            <a href='#' className='uppercase' >Learn More</a >
            <div className='cursor-pointer h-2 w-28 bg-[#fe7867] rounded-md opacity-40 hover:opacity-80' />
          </div>
        </div>

      </div>
    </>

  )
}
