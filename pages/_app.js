import '../styles/globals.css'
import Head from 'next/head'
import Navbar from "../components/Navbar"

function MyApp({ Component, pageProps }) {
  return <>
  
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@48,400,0,0" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,0,0" />
      <Head>
        <title>Videogames Database</title>
        <meta name="app" content="app 1" />
      </Head>


    <div >      
      <div style={{paddingBottom:"68px"}}>
        <Navbar/>
      </div>
      <div style={{padding:"24px"}}>
        <Component {...pageProps} />
      </div>
    </div>

  </>

}

export default MyApp
