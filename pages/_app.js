import '../styles/globals.css'
import Head from 'next/head'
import Navbar from "../components/Navbar"
import { Footer } from '../components/Footer/Footer'
import Router from "next/router"
import {useEffect,useState} from "react"
import { Loader } from '../components/Loader/Loader'
import {animationPresence} from "framer-motion"

function MyApp({ Component, pageProps }) {

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    
    const start = () => {
      console.log("start");
      setLoading(true);
    };

    const end = () => {
      console.log("findished");
      setLoading(false);
    };

    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return <>

      <Head>
        <title>Videogames Database</title>
        <meta name="app" content="app 1" />
      </Head>


    <div >      
      <div style={{paddingBottom:"68px"}}>
        <Navbar/>
      </div>
      
      <div style={{padding:"24px 24px 24px 24px",height:"100%"}}>
        {/* <animationPresence>
          
        </animationPresence> */}
        {loading ? <Loader/> : <Component {...pageProps} />}
      </div>
      <Footer/>
    </div>

  </>

}

export default MyApp
