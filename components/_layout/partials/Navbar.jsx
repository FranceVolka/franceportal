import React from 'react'

export default function Navbar ({}) {
  return (
    <>
      <div id='navbar' className='absolute md:fixed top-0 left-0 z-20 flex flex-col md:flex-row items-center justify-around w-full py-5 px-[100px] space-y-5 md:space-y-0 backdrop-blur-sm md:backdrop-blur-xl bg-transparent bg-opacity-50'>
        <div className='flex flex-row items-center w-full text-[30px] font-bold font-nunito'>
          <span className='text-white'>France</span>
          <span className='text-purple-800'>PORTAL</span>
        </div>
        <div className='hidden md:flex flex-col md:flex-row items-start md:items-center justify-start md:justify-end w-full font-bold font-nunito'>
          <p className='w-[15rem] font-nunito text-sm text-white'>Blk. 14 Lot 5 Joanna Homes Legacy Sudtonggan, Lapu-Lapu City</p>
          <div className='flex flex-col w-[15rem] text-white'>
            <a href="">canefrancisnico@gmail.com</a>
            <a href="">+639280238892</a>
          </div>
        </div>
      </div>
    </>
  )
}
