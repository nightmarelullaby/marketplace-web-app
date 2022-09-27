import Image from "next/image"
import styles from "./GameDetails.module.css"
import Rate from "../Rate"
import {motion} from "framer-motion"
import Label from "../Label/Label"
import { useState } from "react"
 
 const GameDetails = ({game}) => {
    const gameData = game
    const [viewImg, setViewImg] = useState(false)

    const handleImg = () => setViewImg(!viewImg)

    return(
        <div className={styles.gameContainer}>
            <section className={styles.container_row}>
                <motion.div 
                whileHover={{scale:1.01}}
                >
                    <div className={styles.imgContainer} onClick={handleImg}>
                            <Image 
                                placeholder="blur"
                                blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8LwkAAh0BGumlBj4AAAAASUVORK5CYII=="
                                alt={gameData.description}
                                width={1000}
                                height={500}
                                quality={90}
                                className={styles.img}
                                src={gameData.background_image} 
                                layout="responsive"
                                />
                    </div>
                </motion.div>

                <div>
                    <h1 className={styles.gameDetails_mainTitle}>{gameData.name}</h1>
                    <p className={styles.gameDetails_developer}>{gameData.developers == null || undefined ? <small>Cargando...</small>: gameData.developers[0].name}</p>
                    <div className={styles.gameDetails_gridInfo}>
                        <div className={styles.grid_column}>
                            <p className={styles.grid_column_category}>Platafor2mas</p>
                            <div className={styles.labelsGrid}>
                            {gameData.platforms.map(e => 
                                <p key={e.name} className={styles.grid_column_data}>• {e.platform.name}</p>                        
                            )}
                            </div>
                        </div>
                        <div className={styles.grid_column}>
                            <p className={styles.grid_column_category}>Lanzamiento</p>
                            <p className={styles.grid_column_data} >{gameData.released != null || undefined  ? gameData.released: "Unknow"}</p>
                        </div>

                        <div className={styles.grid_column}>
                            <p className={styles.grid_column_category}>Géneros</p>
                            <div className={styles.labelsGrid}> 
                            {gameData.genres.map(e=> 
                            <>
                               <Label content={e.name}/>
                            </>
                            )}
                            </div>
                        </div>

                        <div className={styles.grid_column}>
                            <p className={styles.grid_column_category}>Calificación</p>
                            <Rate rate={gameData.metacritic}/>
                        </div>
                    </div>
                </div>

            </section>
                
            <section>
                <div >
                    <h4 className={styles.grid_column_category}>Descripción</h4>
                    <td className={styles.grid_column_data} dangerouslySetInnerHTML={{__html: gameData.description}} />
                </div>
            </section>
        </div>
    
    )
}
export default GameDetails