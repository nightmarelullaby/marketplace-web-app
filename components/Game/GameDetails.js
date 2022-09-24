import Image from "next/image"
import styles from "./GameDetails.module.css"
import Rate from "../Rate"
import Label from "../Label/Label"
 
 const GameDetails = ({game}) => {
    const gameData = game[0]
    console.log(gameData)
    return(
        <div className={styles.gameContainer}>
            <section className={styles.container_row}>
                <div className={styles.imgContainer}>
                    <Image 
                    placeholder="blur"
                    blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8LwkAAh0BGumlBj4AAAAASUVORK5CYII=="
                    alt={game.description}
                    width={1000}
                    height={500}
                    quality={90}
                    className={styles.img}
                    src={gameData.background_image} 
                    layout="responsive"
                    />
                </div>
                <div >
                    <h1 className={styles.gameDetails_mainTitle}>{gameData.name}</h1>
                    <p className={styles.gameDetails_developer}>{gameData == undefined? <small>Cargando...</small>: gameData.developers[0].name}</p>
                    <div className={styles.gameDetails_gridInfo}>
                        <div className={styles.grid_column}>
                            <p className={styles.grid_column_category}>Plataformas</p>
                            <div className={styles.labelsGrid}>
                            {gameData.platforms.map(e => 
                                <p key={e.name} className={styles.grid_column_data}>• {e.platform.name}</p>                        
                            )}
                            </div>
                        </div>
                        <div className={styles.grid_column}>
                            <p className={styles.grid_column_category}>Lanzamiento</p>
                            <p className={styles.grid_column_data} >{gameData.released != null || undefined ? gameData.released: Unknow}</p>
                        </div>

                        <div className={styles.grid_column}>
                            <p className={styles.grid_column_category}>Géneros</p>
                            <div className={styles.labelsGrid}> 
                            {gameData.genres.map(e=> 
                            <>
                               <Label content={e.name}/>
                                <Label content={e.name}/>
                            </>
                            )}
                            </div>
                        </div>

                        <div className={styles.grid_column}>
                            <p className={styles.grid_column_category}>• Calificación</p>
                            <Rate rate={gameData.metacritic}/>
                        </div>
                    </div>
                </div>

            </section>
                
            <section>
                <div >
                    <h4>Descripción</h4>
                    <td dangerouslySetInnerHTML={{__html: gameData.description}} />
                </div>
            </section>
        </div>
    
    )
}
export default GameDetails