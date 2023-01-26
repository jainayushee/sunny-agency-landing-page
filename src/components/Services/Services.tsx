import React from 'react'

type Service = {
    title: string,
    body: string,
    img: string
}

export default function Services () {
  const services: Service[] = [
    {
      title: 'Graphic Design',
      body: `Great design makes you memorable. We deliver artwork that
        underscores your brand message and captures potential clients’
        attention.`,
      img: 'img/image-graphic-design.jpg'
    },
    {
      title: 'Photography',
      body: `Increase your credibility by getting the most stunning,
      high-quality photos that improve your business image.`,
      img: 'img/image-photography.jpg'
    }

  ]

  return (
    <div className='gallery-section'>
      <div className='grid lg:grid-rows-1 grid-flow-col grid-rows-2'>
        {services.map((service: Service) => (
          <>
            <div className='relative text-center'>
              <img src={service.img} alt='Image not found' />
              <div className='absolute lg:bottom-10 text-center lg:px-24 bottom-2 px-5'>
                <h3 style={{ fontWeight: '900', fontSize: '1.75rem' }}>{service.title}</h3>
                <p className='text-[#5a636c]' style={{ fontFamily: '"Barlow", sans-serif' }}>{service.body}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  )
}
