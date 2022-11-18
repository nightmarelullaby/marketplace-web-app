import styles from "./Navbar.module.css"
import Searchbar from "./Searchbar/Searchbar"
import {useEffect} from "react"
import Link from "next/link"


export default function Navbar(){
    return(
        <div className={styles.navbar}>

                <ul className={styles.navbarContainer}>
                    <Link href="/">
                        <div className={styles.navbarElement}><span className="material-symbols-outlined">videogame_asset</span>gamesDB</div>
                    </Link>
                    <Searchbar/>

                </ul>
        </div>
        )
}
