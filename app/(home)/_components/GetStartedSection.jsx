import React from 'react'
import Image from 'next/image'
function GetStartedSection() {
  return (
    <section className=' bg-[#F7FDFF] px-[10%] pt-[10%] '>
        <div className='space-y-32 pb-10'>
            <div className='space-y-12'>
            <h2 className='text-[36px] italic leading-8 font-semibold '>Your <span className=' text-[#8064A2] '>Hobby</span>, Your <span className=' text-[#0096C8] ' >Community...</span></h2>
            <button className='text-white bg-[#8064A2] px-5 py-2 rounded-lg text-[20px] font-bold'>Get Started</button>
            </div>
            <Image
            src = '/images/image.png'
            alt = 'image'
            width = {1240}
            height = {300}
            />
        </div>
        
    </section>
  )
}

export default GetStartedSection