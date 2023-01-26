import React from 'react'

export default function RowOne () {
  return (
    <>
      <div className='flex flex-row'>
        <div className='basis-6/12'>
          <div className='h-full flex flex-col items-center justify-center p-8'>
            <h1 className='text-[#212529]'>Transform your brand</h1>

            <p className=''>
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>

            <a href='#' className='' >Learn More</a >
          </div>
        </div>
        <div className='basis-6/12'>
          <img src='img/image-transform.jpg' />
        </div>
      </div>
      <div className='flex flex-row'>
        <div className='basis-6/12'>
          <img src='img/image-stand-out.jpg' />
        </div>
        <div className='basis-6/12'>
          <div className='h-full flex flex-col items-center justify-center p-8'>
            <h1 className='text-[#212529]'>Stand out to the right audience</h1>

            <p className=''>
              Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.

            </p>

            <a href='#' className='' >Learn More</a >
          </div>
        </div>

      </div>
    </>

  )
}
