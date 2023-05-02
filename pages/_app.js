import '../styles/globals.css'
import Head from 'next/head'
import Router from "next/router"

import { RecoilRoot } from 'recoil'

function MyApp({ Component, pageProps }) {
  const Layout  = Component.Layout || ((page)=>page)
  return Layout(<Component {...pageProps} />)

}

export default MyApp
