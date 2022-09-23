import Image from 'next/image'
import styles from '../styles/Home.module.css'
import GamesList from './GameList/AllGames'
import Navbar from './Navbar'
import Link from "next/link"
import { useState,useEffect,useContext } from 'react'
import Button from "./Button/Button"

export default function Home() {

  return (
    <>

      <div style={{height:"100vh",display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center"}}>
        <h1 className={styles.homeTitle}>Bienvenido</h1>
        <p className={styles.homeDesc}>Diviértete explorando el catálogo</p>
          <Button href="/GameList/AllGames?page=1" as="/GameList/AllGames?page=1">
            Ir allí
          </Button>
      </div>
    </>

  )
}
