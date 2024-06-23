
import React from 'react'
import AudioPlayerCard from './_subComponents/AudioPlayerCard'
import Image from 'next/image'
function TestimonialSection() {
  return (
   <section className='m-[10%]'>
      <div className='p-10 bg-[#F7F5F9] rounded-lg '>
        <div className='space-y-8'>
          <h3 className='flex space-x-6'>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 40.0005C31.0277 40.0005 40 31.0282 40 20.0005C40 16.7252 39.1373 13.6637 37.7383 10.9341L36 7.99854L33 4.99854L29.0566 2.2583C26.3293 0.862223 23.2723 0.000490634 20 0.000490347C8.9723 0.000489383 2.71253e-06 8.97278 1.74846e-06 20.0005C7.84383e-07 31.0282 8.97229 40.0005 20 40.0005ZM26 26.9985C23.791 26.9985 22 25.2075 22 22.9985C22 22.9125 22.0204 22.8316 22.0254 22.7466C22.0114 22.6656 22 22.5826 22 22.4966C22 22.2216 22.0526 15.7084 26.5996 12.2974C26.8696 12.0954 27.185 11.9966 27.498 11.9966C27.954 11.9966 28.4042 12.2051 28.6992 12.5981C29.1962 13.2611 29.0624 14.2008 28.4004 14.6978C26.8924 15.8288 26.0568 17.5196 25.5898 19.0396C25.7268 19.0256 25.859 18.9985 26 18.9985C28.209 18.9985 30 20.7895 30 22.9985C30 25.2075 28.209 26.9985 26 26.9985ZM14 26.9985C11.791 26.9985 10 25.2075 10 22.9985C10 22.9125 10.0204 22.8316 10.0254 22.7466C10.0114 22.6656 10 22.5826 10 22.4966C10 22.2216 10.0526 15.7084 14.5996 12.2974C14.8696 12.0954 15.185 11.9966 15.498 11.9966C15.954 11.9966 16.4042 12.2051 16.6992 12.5981C17.1962 13.2611 17.0624 14.2008 16.4004 14.6978C14.8924 15.8288 14.0568 17.5195 13.5898 19.0396C13.7268 19.0256 13.859 18.9985 14 18.9985C16.209 18.9985 18 20.7895 18 22.9985C18 25.2075 16.209 26.9985 14 26.9985Z" fill="#8064A2"/>
          </svg>
          <div className='font-bold text-[24px] '>Testimonials</div>

          </h3>

          <p className='text-[#6D747A] font-light  text-[18px] leading-7 '>
          In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.
          </p>
          <div className='flex space-x-24'>
          <AudioPlayerCard audioSrc='https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' imageSrc='https://s3-alpha-sig.figma.com/img/ab9f/15ee/2bc87a41926b207ab3c50bc70b9bd0c4?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DLdu3X0hTU5QxLu4pGAYsA4FzcsRwiPfIrjsKC1gEYnJl7rNTbJmPZ-zXV12F1Ofaqhn7dYd411Xuo9nRUD5-mhD6hQDvUz9x9GXhCOGvtoLTiZyomMj8BX-UvHHZsstOuhI6cVZS8FiTY5KeKPO8r~BmxYdEjKWGOCUZ~q4zE5i4t59TVtgYnzULwSQB2dfHdg~15kh6xEcwnhoKOkwzx0wBBSUB-Lb7eZ31nij~AFOyxBnl0jqLg9FRpth8Kh5~vL8qigqXxvuZFX6uMA7MJjVTZMEW63arWST2qEAdPLsabVjoRWFLIjqosyZhbNV2BN2ohqCHFk~OerzwWYAUw__' />
          <div className='flex items-center justify-between min-w-[300px]'>
            <Image
            src={"https://s3-alpha-sig.figma.com/img/ab9f/15ee/2bc87a41926b207ab3c50bc70b9bd0c4?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DLdu3X0hTU5QxLu4pGAYsA4FzcsRwiPfIrjsKC1gEYnJl7rNTbJmPZ-zXV12F1Ofaqhn7dYd411Xuo9nRUD5-mhD6hQDvUz9x9GXhCOGvtoLTiZyomMj8BX-UvHHZsstOuhI6cVZS8FiTY5KeKPO8r~BmxYdEjKWGOCUZ~q4zE5i4t59TVtgYnzULwSQB2dfHdg~15kh6xEcwnhoKOkwzx0wBBSUB-Lb7eZ31nij~AFOyxBnl0jqLg9FRpth8Kh5~vL8qigqXxvuZFX6uMA7MJjVTZMEW63arWST2qEAdPLsabVjoRWFLIjqosyZhbNV2BN2ohqCHFk~OerzwWYAUw__"}
            alt='Album cover'
            width={100}
            height={100}
            className='rounded-full'

            />
            <div>
              <h4 className='text-[#8064A2] text-[18px] font-bold '>Shubha Nagarajan</h4>
              <p className='text-[#0096C8] text-[14px] '>Classical Dancer</p>
            </div>
            </div>

        </div>
        </div> 
      </div>
   </section>
  )
}

export default TestimonialSection