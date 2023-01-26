import React from 'react'

export default function Gallery () {
  const images: string[] = ['img/image-gallery-milkbottles.jpg', 'img/image-gallery-orange.jpg', 'img/image-gallery-cone.jpg', 'img/image-gallery-sugarcubes.jpg']

  return (
    <div className='gallery-section'>
      <div className='grid grid-rows-1 grid-flow-col'>
        {images.map((image: string) => (
          <img src={image} alt='milkbottles' />
        ))}
      </div>
    </div>
  )
}
