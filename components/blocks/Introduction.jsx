import { useCallback } from "react"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import { loadSlim } from "tsparticles-slim"
import particlesConfig from '@/components/config/particles-config'
import Type from '@/components/config/typewriter'
import HomeImage from '@/public/images/GIF_image.gif'
import Image from "next/image"
import About from '@/public/images/About.png'

export default function Introduction({}) {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
      await console.log(container);
  }, []);


  return (
    <>
      <Particles 
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesConfig}
      />
      <div className="container flex flex-col items-center justify-center w-full h-screen mt-1">
        <div className="flex flex-col md:flex-row">
          <div 
            className="w-7/12 pt-[80px]"
            >
            <div
               data-aos="fade-right" 
               data-aos-delay="200"
            >
              <h1 className="text-white font-nunito font-bold text-[3em] uppercase pl-[45px]">
                Hi There!
                <span role="img" className="wave">👋🏻</span>
              </h1>
              <h1 className="text-white font-nunito font-bold text-[3em] uppercase pl-[45px]">
                I&apos;M
                <span className="text-purple-800"> Francis Cane</span>
              </h1>
            </div>
            <div 
              className="p-[50px] text-left"
              data-aos="fade-in" 
              data-aos-delay="400"
            >
              <Type />
            </div>
          </div>
          <div 
            className="w-full md:w-5/12 px-20 md:px-0 py-[20px]"
            data-aos="fade-left" 
            data-aos-delay="600"
            >
            <Image
              src={HomeImage}
              alt={`Home Image`}
              quality={100}
              width={1000}
              height={1000}
              className="w-full h-full rounded-full"
            >
            </Image>
          </div>
        </div>
      </div>
    </>
  )
}