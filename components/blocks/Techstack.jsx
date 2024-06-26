import React from 'react'
import { 
  DiReact,
  DiAngularSimple,
  DiHtml5,
  DiJavascript,
  DiCss3,
} from 'react-icons/di'
import { 
  SiNextdotjs,
  SiStrapi,
  SiVercel,
  SiPostman,
} from "react-icons/si";
import { 
  TbBrandVscode 
} from "react-icons/tb";
import { 
  FaGithub,
} from "react-icons/fa";

export default function SkillSet ({}) {
  return (
    <>
    <div className='flex flex-col items-center justify-center w-full h-screen'>
      <div className='container flex flex-col items-center justify-center w-full h-screen'>
        <div className="flex flex-col items-center w-full p-[10px]">
          <h1 className='text-[2.3em] font-nunito text-white'>Professional <span className='text-purple-800'>Skillset</span></h1>
        </div>
        <div 
          className='flex flex-col items-center w-full max-w-full space-y-10 mt-[2em]'
          data-aos="zoom-in-up"
          data-aos-delay="200"
        >
          <div className='flex flex-wrap items-center justify-center w-full max-w-full gap-10'>
            <div className='flex flex-col w-1/6 opacity-95 overflow-hidden py-[35px] px-[60px] text-center text-[4.5em] 
            transition-all duration-300 ease-in align-middle rounded-md border-[1.7px] border-[#c889e6a2] text-white boxShadow_purple hover:scale-[1.05] hover:border-[2.2px] hover:border-[#c573e6e1]'>
              <DiReact className='m-auto'></DiReact>
              <p className='text-[.25em] mb-0 mt-3'>React</p>
            </div>
            <div className='flex flex-col w-1/6 opacity-95 overflow-hidden py-[35px] px-[60px] text-center text-[4.5em] 
            transition-all duration-300 ease-in align-middle rounded-md border-[1.7px] border-[#c889e6a2] text-white boxShadow_purple hover:scale-[1.05] hover:border-[2.2px] hover:border-[#c573e6e1]'>
              <DiAngularSimple className='m-auto'></DiAngularSimple>
              <p className='text-[.25em] mb-0 mt-3'>Angular</p>
            </div>
            <div className='flex flex-col w-1/6 opacity-95 overflow-hidden py-[35px] px-[60px] text-center text-[4.5em] 
            transition-all duration-300 ease-in align-middle rounded-md border-[1.7px] border-[#c889e6a2] text-white boxShadow_purple hover:scale-[1.05] hover:border-[2.2px] hover:border-[#c573e6e1]'>
              <DiHtml5 className='m-auto'></DiHtml5>
              <p className='text-[.25em] mb-0 mt-3'>HTML</p>
            </div>
            <div className='flex flex-col w-1/6 opacity-95 overflow-hidden py-[35px] px-[60px] text-center text-[4.5em] 
            transition-all duration-300 ease-in align-middle rounded-md border-[1.7px] border-[#c889e6a2] text-white boxShadow_purple hover:scale-[1.05] hover:border-[2.2px] hover:border-[#c573e6e1]'>
              <SiNextdotjs className='m-auto'></SiNextdotjs >
              <p className='text-[.25em] mb-0 mt-3'>NextJs</p>
            </div>
            <div className='flex flex-col w-1/6 opacity-95 overflow-hidden py-[35px] px-[60px] text-center text-[4.5em] 
            transition-all duration-300 ease-in align-middle rounded-md border-[1.7px] border-[#c889e6a2] text-white boxShadow_purple hover:scale-[1.05] hover:border-[2.2px] hover:border-[#c573e6e1]'>
              <SiStrapi className='m-auto'></SiStrapi >
              <p className='text-[.25em] mb-0 mt-3'>Strapi</p>
            </div>
            <div className='flex flex-col w-1/6 opacity-95 overflow-hidden py-[35px] px-[60px] text-center text-[4.5em] 
            transition-all duration-300 ease-in align-middle rounded-md border-[1.7px] border-[#c889e6a2] text-white boxShadow_purple hover:scale-[1.05] hover:border-[2.2px] hover:border-[#c573e6e1]'>
              <DiJavascript className='m-auto'></DiJavascript >
              <p className='text-[.25em] mb-0 mt-3'>JavaScript</p>
            </div>
            <div className='flex flex-col w-1/6 opacity-95 overflow-hidden py-[35px] px-[60px] text-center text-[4.5em] 
            transition-all duration-300 ease-in align-middle rounded-md border-[1.7px] border-[#c889e6a2] text-white boxShadow_purple hover:scale-[1.05] hover:border-[2.2px] hover:border-[#c573e6e1]'>
              <DiCss3 className='m-auto'></DiCss3 >
              <p className='text-[.25em] mb-0 mt-3'>CSS</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center w-full p-[10px] mt-[50px]">
          <h1 className='text-[2.3em] font-nunito text-white'>Tools <span className='text-purple-800'>I use</span></h1>
        </div>
        <div 
          className='flex flex-col items-center w-full max-w-full space-y-10 mt-[3em]'
          data-aos="zoom-in-up"
          data-aos-delay="200"
        >
          <div className='flex flex-wrap items-center justify-center w-full max-w-full gap-10'>
            <div className='flex flex-col w-1/6 opacity-95 overflow-hidden py-[35px] px-[60px] text-center text-[4.5em] 
            transition-all duration-300 ease-in align-middle rounded-md border-[1.7px] border-[#c889e6a2] text-white boxShadow_purple hover:scale-[1.05] hover:border-[2.2px] hover:border-[#c573e6e1]'>
              <TbBrandVscode className='m-auto'></TbBrandVscode>
              <p className='text-[.25em] mb-0 mt-3'>VS Code</p>
            </div>
            <div className='flex flex-col w-1/6 opacity-95 overflow-hidden py-[35px] px-[60px] text-center text-[4.5em] 
            transition-all duration-300 ease-in align-middle rounded-md border-[1.7px] border-[#c889e6a2] text-white boxShadow_purple hover:scale-[1.05] hover:border-[2.2px] hover:border-[#c573e6e1]'>
              <FaGithub className='m-auto'></FaGithub>
              <p className='text-[.25em] mb-0 mt-3'>GitHub</p>
            </div>
            <div className='flex flex-col w-1/6 opacity-95 overflow-hidden py-[35px] px-[60px] text-center text-[4.5em] 
            transition-all duration-300 ease-in align-middle rounded-md border-[1.7px] border-[#c889e6a2] text-white boxShadow_purple hover:scale-[1.05] hover:border-[2.2px] hover:border-[#c573e6e1]'>
              <SiVercel className='m-auto'></SiVercel>
              <p className='text-[.25em] mb-0 mt-3'>Vercel</p>
            </div>
            <div className='flex flex-col w-1/6 opacity-95 overflow-hidden py-[35px] px-[60px] text-center text-[4.5em] 
            transition-all duration-300 ease-in align-middle rounded-md border-[1.7px] border-[#c889e6a2] text-white boxShadow_purple hover:scale-[1.05] hover:border-[2.2px] hover:border-[#c573e6e1]'>
              <SiPostman className='m-auto'></SiPostman>
              <p className='text-[.25em] mb-0 mt-3'>Postman</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
