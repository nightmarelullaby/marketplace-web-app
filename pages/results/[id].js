import GameCard from "../../components/GameList/GameCard"
import DisplaySection from "../../components/DisplaySection/DisplayOptions";
import styles from "../../components/GameList/GamesList.module.css"

export default function id({results}){

    return(
    <div>
      <div className={styles.GamesList}> 
          <h1 className={styles.title}>Results</h1>
          <DisplaySection/>
		  {results != undefined || null ?
			  <div className={styles.container}>
				  {results.map(game => 
					  <GameCard key={game.name} game={game}/>
				  )}
			  </div>: <small>No se encontraron coincidencias..</small>
		  }

      </div>
    </div>
    )
}
export async function getServerSideProps(ctx){
    const key = process.env.DB_KEY
    const response = await fetch(`https://api.rawg.io/api/games?key=${key}&search=${ctx.query.id}`)
    const json = await response.json()
    const {results} = await json
  
    // results.forEach(e => resultsData.push({
      // id:e.id,
      // background_image:e.background_image,
      // metacritic:e.metacritic,
      // released:e.released
    // }))
    return {
      
      props:{
        results:results,

      }
    }
  }
  
  
  
  
