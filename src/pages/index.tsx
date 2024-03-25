import Head from "next/head";
import dynamic from "next/dynamic";
import  { useLazyLoadOnScroll } from '@/helper/hooks/useLazyLoadOnScroll'

const Introduction = dynamic(() => import('@/components/blocks/Introduction'), {ssr: false})
const Myself = dynamic(() => import('@/components/blocks/Myself'), {ssr: false})
const Techstack = dynamic(() => import('@/components/blocks/Techstack'), {ssr: false})
const Experience = dynamic(() => import('@/components/blocks/Experience'), {ssr: false})

export default function Home({ }) {
  const isLazyLoad = useLazyLoadOnScroll()
  
  console.log(isLazyLoad);
  return (
    <>
      <Head>
        <title>Francis Nico Cane</title>
      </Head>
      <Introduction />
      {isLazyLoad && (
        <>
          <Myself />
          <Techstack />
          <Experience />
        </>
      )}
    </>
  )
}