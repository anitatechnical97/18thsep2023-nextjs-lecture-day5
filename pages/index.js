//  Import Area

import Head from 'next/head'

//  Import something from 'some library/location';

import styles from '../styles/Home.module.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Aside from './components/Aside';
import Section from './components/Section';


//  Function Definition Area

 function Home() {
  return (
    <>
      <Head>
        <title> Welcome to my first nextjs project </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />


      <main>
         <Aside />
         <Section />
      </main>
      <Footer>  </Footer>
    </>
  )
}


//   Export Area

export default Home;
