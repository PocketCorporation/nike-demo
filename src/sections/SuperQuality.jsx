import React from 'react'
import Button from '../components/Button'
import { shoe8 } from '../assets/images'
import { arrowRight } from '../assets/icons'

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-col flex-1">
      <h2 className='font-palanquin text-4xl capitoloze font-bold lg:max-w-lg'>
        <span className='text-coral-red'> Special </span>
        <span className='text-coral-red'>Offer </span> 
        Shoes
      </h2>
      <p className='mt-4 lg:max-w-lg info-text'>Embark on a shopping journey that redefines your expereince with unbeatable deals. From premier selections to incresdible savings, we offer unparalleled value that sets us apart.</p>
      <p className="mt-6 lg:max-w-lg info-text">Navigate a realm of possibilites to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label='Shop Now' iconURL={arrowRight}/>
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
      
      <img 
        src={shoe8}
        alt='shoe8'
        width={570}
        height={522}
        className='object-contain'
      /></div>
    </section>
  )
}

export default SuperQuality