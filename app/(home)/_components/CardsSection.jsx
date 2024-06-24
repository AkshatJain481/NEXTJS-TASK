import React from 'react'

function CardsSection() {
  return (
    <section className='m-[10%]'>
        <div className='grid md:grid-cols-2 max-md:grid-cols-1 gap-6'>

            <div className=' group border border-[#CED4DA] rounded-lg p-10 hover:bg-[#8064A2] hover:text-white transition duration-300 '>
                <h3 className='flex items-center max-sm:justify-center font-bold text-[24px]'>
                    <span>
                        
                    <svg className=" mr-4  w-[40px] text-[#8064A2] fill-current  group-hover:fill-white transition duration-300" viewBox="0 0 40 40">
                    <g clip-path="url(#clip0_1_4242)">
                        <path d="M20 21.25C22.7167 21.25 25.1167 21.9 27.0667 22.75C28.8667 23.55 30 25.35 30 27.3V30H10V27.3167C10 25.35 11.1333 23.55 12.9333 22.7667C14.8833 21.9 17.2833 21.25 20 21.25ZM6.66667 21.6667C8.5 21.6667 10 20.1667 10 18.3333C10 16.5 8.5 15 6.66667 15C4.83333 15 3.33333 16.5 3.33333 18.3333C3.33333 20.1667 4.83333 21.6667 6.66667 21.6667ZM8.55 23.5C7.93333 23.4 7.31667 23.3333 6.66667 23.3333C5.01667 23.3333 3.45 23.6833 2.03333 24.3C0.8 24.8333 0 26.0333 0 27.3833V30H7.5V27.3167C7.5 25.9333 7.88333 24.6333 8.55 23.5ZM33.3333 21.6667C35.1667 21.6667 36.6667 20.1667 36.6667 18.3333C36.6667 16.5 35.1667 15 33.3333 15C31.5 15 30 16.5 30 18.3333C30 20.1667 31.5 21.6667 33.3333 21.6667ZM40 27.3833C40 26.0333 39.2 24.8333 37.9667 24.3C36.55 23.6833 34.9833 23.3333 33.3333 23.3333C32.6833 23.3333 32.0667 23.4 31.45 23.5C32.1167 24.6333 32.5 25.9333 32.5 27.3167V30H40V27.3833ZM20 10C22.7667 10 25 12.2333 25 15C25 17.7667 22.7667 20 20 20C17.2333 20 15 17.7667 15 15C15 12.2333 17.2333 10 20 10Z" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1_4242">
                            <rect width="40" height="40" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                        </span>People</h3>
                        <p className=' md:max-lg:text-[14px] max-sm:text-center  lg:text-[18px]  my-8 '>
                        Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.
                        </p>

                        <button className='text-[#8064A2] max-sm:w-full group-hover:text-white group-hover:border-white transition duration-300 border-[#8064A2] border font-bold rounded-lg px-8 py-2'>Connect</button>
            </div>

            <div className='group border border-[#CED4DA] rounded-lg p-10 hover:bg-[#77933C] hover:text-white transition duration-300 md:relative'>
    <h3 className='flex items-center font-bold text-[24px] max-sm:justify-center '>
        <span>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-4 text-[#77933C] group-hover:text-white transition duration-300 '>
                <g clipPath="url(#clip0_1_4263)">
                    <path d="M20.0002 3.33333C13.5502 3.33333 8.3335 8.55 8.3335 15C8.3335 23.75 20.0002 36.6667 20.0002 36.6667C20.0002 36.6667 31.6668 23.75 31.6668 15C31.6668 8.55 26.4502 3.33333 20.0002 3.33333ZM20.0002 19.1667C17.7002 19.1667 15.8335 17.3 15.8335 15C15.8335 12.7 17.7002 10.8333 20.0002 10.8333C22.3002 10.8333 24.1668 12.7 24.1668 15C24.1668 17.3 22.3002 19.1667 20.0002 19.1667Z" fill="currentColor"/>
                </g>
                <defs>
                    <clipPath id="clip0_1_4263">
                        <rect width="40" height="40" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
        </span>
        Place
    </h3>
    
    <p className=' lg:text-[18px] md:max-lg:text-[14px] max-sm:text-center my-8'>
        Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hobbycue.
    </p>

    <button className='text-[#8064A2] max-sm:w-full group-hover:text-white group-hover:border-white transition duration-300 border-[#8064A2] border font-bold rounded-lg px-8 py-2 md:absolute bottom-10'>Meet up</button>
</div>


<div className='group border border-[#CED4DA] rounded-lg p-10 hover:bg-[#C0504D] hover:text-white transition duration-300'>
    <h3 className='flex items-center font-bold text-[24px] max-sm:justify-center '>
        <span>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-4 text-[#C0504D] transition duration-300 group-hover:text-white'>
                <g clipPath="url(#clip0_1_4253)">
                    <path d="M28.6832 14.9997L21.3832 4.06636C21.0665 3.5997 20.5332 3.36636 19.9998 3.36636C19.4665 3.36636 18.9332 3.5997 18.6165 4.08303L11.3165 14.9997H3.33317C2.4165 14.9997 1.6665 15.7497 1.6665 16.6664C1.6665 16.8164 1.68317 16.9664 1.73317 17.1164L5.9665 32.5664C6.34984 33.9664 7.63317 34.9997 9.1665 34.9997H30.8332C32.3665 34.9997 33.6498 33.9664 34.0498 32.5664L38.2832 17.1164L38.3332 16.6664C38.3332 15.7497 37.5832 14.9997 36.6665 14.9997H28.6832ZM14.9998 14.9997L19.9998 7.66636L24.9998 14.9997H14.9998ZM19.9998 28.333C18.1665 28.333 16.6665 26.833 16.6665 24.9997C16.6665 23.1664 18.1665 21.6664 19.9998 21.6664C21.8332 21.6664 23.3332 23.1664 23.3332 24.9997C23.3332 26.833 21.8332 28.333 19.9998 28.333Z" fill="currentColor"/>
                </g>
                <defs>
                    <clipPath id="clip0_1_4253">
                        <rect width="40" height="40" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
        </span>
        Product
    </h3>

    <p className=' lg:text-[18px] md:max-lg:text-[14px] max-sm:text-center my-8'>
        Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or from community members.
    </p>
    
    <button className='text-[#8064A2] max-sm:w-full group-hover:text-white group-hover:border-white transition duration-300 border-[#8064A2] border font-bold rounded-lg px-8 py-2'>Get it</button>
</div>


<div className='group border border-[#CED4DA] rounded-lg p-10 md:relative hover:bg-[#0096C8] hover:text-white transition duration-300'>
    <h3 className='flex items-center font-bold text-[24px] max-sm:justify-center '>
        <span>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-4 fill-current text-[#0096C8] transition duration-300 group-hover:text-white'>
                <g clipPath="url(#clip0_1_4273)">
                    <rect x="8" y="13" width="24" height="19" fill="currentColor" />
                    <path d="M26.6667 17.5498C26.1833 17.0665 25.3833 17.0665 24.9 17.5498L17.65 24.7998L15 22.1498C14.5167 21.6665 13.7167 21.6665 13.2333 22.1498C12.75 22.6332 12.75 23.4332 13.2333 23.9165L16.4667 27.1498C17.1167 27.7998 18.1667 27.7998 18.8167 27.1498L26.65 19.3165C27.15 18.8332 27.15 18.0332 26.6667 17.5498ZM31.6667 4.99984H30V3.33317C30 2.4165 29.25 1.6665 28.3333 1.6665C27.4167 1.6665 26.6667 2.4165 26.6667 3.33317V4.99984H13.3333V3.33317C13.3333 2.4165 12.5833 1.6665 11.6667 1.6665C10.75 1.6665 10 2.4165 10 3.33317V4.99984H8.33333C6.48333 4.99984 5.01667 6.49984 5.01667 8.33317L5 31.6665C5 33.4998 6.48333 34.9998 8.33333 34.9998H31.6667C33.5 34.9998 35 33.4998 35 31.6665V8.33317C35 6.49984 33.5 4.99984 31.6667 4.99984ZM30 31.6665H10C9.08333 31.6665 8.33333 30.9165 8.33333 29.9998V13.3332H31.6667V29.9998C31.6667 30.9165 30.9167 31.6665 30 31.6665Z" fill="currentColor"/>
                    <path d="M26.7958 17.3625C26.3125 16.8792 25.5125 16.8792 25.0292 17.3625L17.7792 24.6125L15.1292 21.9625C14.6458 21.4792 13.8458 21.4792 13.3625 21.9625C12.8792 22.4458 12.8792 23.2458 13.3625 23.7292L16.5958 26.9625C17.2458 27.6125 18.2958 27.6125 18.9458 26.9625L26.7792 19.1292C27.2792 18.6458 27.2792 17.8458 26.7958 17.3625Z" 
                    fill="white"
                    className="group-hover:fill-[#0096C8] transition duration-300"
                />

                </g>
                <defs>
                    <clipPath id="clip0_1_4273">
                        <rect width="40" height="40" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
        </span>
        Program
    </h3>

    <p className=' lg:text-[18px] md:max-lg:text-[14px] max-sm:text-center my-8'>
        Find events, meetups and workshops related to your hobby. Register or buy tickets online.
    </p>
    
    <button className='text-[#8064A2] max-sm:w-full group-hover:text-white group-hover:border-white transition duration-300 border-[#8064A2] border font-bold rounded-lg px-8 py-2 md:absolute bottom-10'>Attend</button>
</div>


        </div>
    </section>
  )
}

export default CardsSection