import React from 'react'
import Navbar from './_components/Navbar'
import Footer from './_components/Footer'

function layout({children}) {
  return (
    <div className=''>
      <Navbar />
        {children}
      <Footer />
      <div className=' max-sm:h-[40px]  sm:h-[78px] bg-[#F7F5F9] flex items-center justify-center font-medium	  '> <div>© Purple Cues Private Limited </div></div>
    </div>
  )
}

export default layout