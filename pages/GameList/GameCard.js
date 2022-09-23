import Image from "next/image"
import styles from './GameCard.module.css'
import Rate from "../Rate"
import { useState,useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/router"


export default function GameCard({game}){
  const router = useRouter()
  const [loading, setLoading] = useState()
    return(
      <div>
        <Link href={`/Game/${game.id}`} as={`/Game/${game.id}`}>
          <a>
            {game == undefined ? <small>¡Vaya!, no hay nada que mostrar..</small>: 
                
                <div className={styles.container}>
                  {game.background_image != null ? 
                  <Image alt={game.description} className={styles.img} width="600" height="400" src={game.background_image}/>: <small>No image</small>}
    
                  <div className={styles.containerInfo}>
                  <Rate margin={true} rate={game.metacritic}/>
                  <h3 className={styles.title}>{game.name}</h3>
    
                  <div className={styles.row}>
                    <small style={{marginRight:"auto",fontSize:"16px"}} >{game.released}</small>
                    <span style={{fontSize:"20px",marginRight:"8px"}} className="material-symbols-sharp googleIcons">more_horiz</span>
                    <span style={{fontSize:"20px"}} className="material-symbols-sharp googleIcons">favorite</span>
                  </div>
    
    
                  </div>
    
                </div>}
          </a>
  
        </Link>
  
      </div>

        
    )
}
