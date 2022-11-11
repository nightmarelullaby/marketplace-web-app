import GameCard from "../../components/GameList/GameCard"
import DisplaySection from "../../components/DisplaySection/DisplayOptions";
import styles from "../../components/GameList/GamesList.module.css"
import {useRouter} from "next/router"

export default function Id({results,baseUrl}){
  const router = useRouter()

  console.log(baseUrl)
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
    const queries = ctx.query
    const arrayOfQueries = Object.entries(queries)
    const baseUrl = new URL("https://api.rawg.io/api/games")
    baseUrl.searchParams.set("key", key);
    baseUrl.searchParams.set("search_precise",true)
    await arrayOfQueries.forEach(q => {
      baseUrl.searchParams.set(q[0], q[1])
    })

    // baseUrl.searchParams.set("search",queries.id)

    const response = await fetch(baseUrl)
    const json = await response.json()
    const {results} = await json

    /*// results.forEach(e => resultsData.push({
      // id:e.id,
      // background_image:e.background_image,
      // metacritic:e.metacritic,
      // released:e.released
    // }))*/
    return {

      props:{
        baseUrl:baseUrl.toString(),
        results:results,

      }
    }
  }
