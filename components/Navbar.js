import styles from "./Navbar.module.css"
import Searchbar from "./Searchbar/Searchbar"
import {useEffect} from "react"
import Link from "next/link"


export default function Navbar(){
    useEffect(()=>console.log("i rendered"),[])
    return(
        <div className={styles.navbar}>

                <ul className={styles.navbarContainer}>
                    <Link href="/">
                        <div className={styles.navbarElement}><span className="material-symbols-outlined">videogame_asset</span>gamesDB</div>
                    </Link>
                    <Searchbar/>
                    <div style={{display:"flex"}}>
                        <li className={styles.navbarElement}><span className="material-symbols-outlined">toggle_off</span> <button className={styles.navbarButton} href=""> Dark mode</button></li>
                        {/* <li className={styles.navbarElement}><a href=""><span className="material-symbols-outlined">person</span></a></li> */}
                    </div>
                </ul>
        </div>
        )
}