import React from 'react'
import mainpage from '../Assets/mainpage.png'

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
        <div className='max-h-[700px] relative'>
            {/* overlay */}
            <div className='absolute w-full h-full text-gray-200 max-h-[5000px] bg-black/40 flex flex-col justify-center'>
            <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-black/100'>Best</span></h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> <span className='text-black/100'>Foods</span> Devlivered</h1>
            </div>
            <img classname='w-full max-h-[700px] object-cover' src={mainpage} alt=""  />
        </div>
      
    </div>
  )
}

export default Hero
