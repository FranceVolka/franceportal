import Head from "next/head";
import Introduction from '@/components/blocks/Introduction'

export default function Home({ }) {

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Introduction />
    </>
  )
}