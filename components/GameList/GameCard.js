import Image from "next/image"
import styles from './GameCard.module.css'
import Rate from "../Rate"
import { useState } from "react"
import Link from "next/link"
import PopOver from "../PopOver/PopOver"

export default function GameCard({game}){
  const [open,setOpen] = useState(false)
  const handleOpen = ()=>{
    return setOpen(!open)
  }
    return(
      <div>
        <Link href={`../../GameDetails/${game.id}`} as={`../../GameDetails/${game.id}`}>
          <a>
            {game == undefined ? <small>¡Vaya!, no hay nada que mostrar..</small>: 
                
                <div className={styles.container}>
                  {game.background_image != null ? 
                  <Image 
                  alt={game.description} 
                  className={styles.img} 
                  width="600" 
                  height="400" 
                  placeholder="blur"
                  blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8LwkAAh0BGumlBj4AAAAASUVORK5CYII=="
                  src={game.background_image}/>: <small>No image</small>}
    
                  <div className={styles.containerInfo}>
                  <Rate margin={true} rate={game.metacritic}/>
                  <h3 className={styles.title}>{game.name}</h3>
    
                  <div className={styles.row}>
                    <small style={{marginRight:"auto",fontSize:"16px"}} >{game.released != null ?  game.released.slice(0,4): "Unknow"}</small>

                    <span style={{fontSize:"20px"}} className="material-symbols-sharp googleIcons">favorite</span>
                  </div>
    
    
                  </div>
    
                </div>}
          </a>
  
        </Link>
  
      </div>

        
    )
}
