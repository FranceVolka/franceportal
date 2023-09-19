import { useCallback } from "react"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import { loadSlim } from "tsparticles-slim"
import particlesConfig from '@/components/config/particles-config'

export default function Introduction({}) {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
      await console.log(container);
  }, []);
  return (
    <>
      <div className="relative flex justify-center items-center z-[1] min-h-screen">
        <Particles 
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={particlesConfig}
        />
        <div className="container">
          <div className="flex flex-wrap justify-center row-home">
            <div className="w-full lg:w-10/12">
              <div className="py-[50px] text-center">
                <h1 className="text-white font-nunito font-bold text-[3.2857rem]">
                  Hi, I am
                  <span className="text-[#037fff]"> Francis Cane</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}