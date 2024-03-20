import React from 'react'
import Image from 'next/image'
import About from '@/public/images/About.png'

export default function Myself ({}) {
  return (
    <>
    <div className='flex flex-col items-center justify-center w-full h-screen dark:border-neutral-800 bg-accent-7 dark:bg-[#1B1329]'>
      <div className='container flex flex-col items-center justify-center w-full h-screen'>
        <div className="flex flex-col md:flex-row justify-center p-[10px]">
          <div 
            className="w-full md:w-5/12 px-20 md:px-0 py-[20px]"
            data-aos="fade-in" 
            data-aos-delay="200"
          >
            <Image
              src={About}
              alt={`About Image`}
              quality={100}
              width={1000}
              height={1000}
              className="w-full h-full"
            >
            </Image>
          </div>
          <div 
            className="w-7/12 pt-[80px] justify-center font-nunito ml-5"
            data-aos="fade-left" 
            data-aos-delay="400"
          >
            <h1 className='text-[2.1em] pb-5 text-white'>
              Know Who <strong className='text-purple-800'>I'M</strong>
            </h1>
            <div className='relative flex flex-col break-words rounded min-w-0 text-white text-xl'>
              <p className="text-justify">
              A passionate <span className='text-purple-800'>front-end developer</span> on an exciting journey into the world of web development. 
              With a focus on modern technologies like ReactJS and Next.js, I'm constantly exploring new horizons and seeking to deepen my understanding of creating engaging user experiences.
              </p>
              <br />
              <p className="text-justify">
              As a front-end enthusiast, I thrive on the creativity and problem-solving aspects of web development. 
              My journey began with HTML, CSS, and vanilla JavaScript, where I honed my skills in crafting visually stunning and interactive websites. 
              However, my curiosity led me to delve deeper into the world of frameworks and libraries, where I discovered the power and flexibility of ReactJS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
