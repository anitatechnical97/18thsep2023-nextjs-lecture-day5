//  Import Area

import Head from 'next/head'

//  Import something from 'some library/location';

import styles from '../styles/Home.module.css'


//  Function Definition Area

 function Home() {
  return (
    <>
      <Head>
        <title> Welcome to my first nextjs project </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>Header Component</header>
      <main>
        <aside>Aside Component </aside>
        <section>Section Component </section>
      </main>

      <footer>Footer Component </footer>
    </>
  )
}


//   Export Area

export default Home;
