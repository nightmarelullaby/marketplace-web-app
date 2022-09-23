import Image from "next/image"
import styles from "./GameDetails.module.css"
import Rate from "../Rate"
 
 const GameDetails = ({game}) => {
    const gameData = game[0]
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
                    <p className={styles.gameDetails_developer}>{gameData.developers[0].name}</p>
                    <div className={styles.gameDetails_gridInfo}>
                        <div className={styles.grid_column}>
                            <p className={styles.grid_column_category}>• Platforms</p>
                            {gameData.platforms.map(e => <p key={e.name} className={styles.grid_column_data}>{e.platform.name}</p>)}
                        </div>
                        <div className={styles.grid_column}>
                            <p className={styles.grid_column_category}>• Lanzamiento</p>
                            <p className={styles.grid_column_data} >{gameData.released}</p>
                        </div>
                        <div className={styles.grid_column}>
                            <p className={styles.grid_column_category}>• Géneros</p>
                            {gameData.genres.map(e=> <p key={e.name} className={styles.grid_column_data}>{e.name}</p>)}
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

                </div>
            </section>
        </div>
    
    )
}
export default GameDetails