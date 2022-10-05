import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '@/styles/css/Home.module.css'

import Gallery from '@/components/Gallery'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Britney Conley</title>
        <meta name="description" content="Development Portfolio For Britney Conley" />
        <link rel="icon" href="/14.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Britney Conley</h1>
        <p>Hi, I'm Britney, I like to make websites, recently mostly in React.</p>
        <Gallery />
        <p><a href='https://github.com/BritneyAC'>Github</a> | <a download href={"BritneyConley.pdf"}>Resume</a></p>
      </main>
    </div>
  )
}

export default Home
