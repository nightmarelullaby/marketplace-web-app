import GameCard from "../components/GameList/GameCard"
import styles from "../components/GameList/GamesList.module.css"
import {useRouter} from "next/router"
import Back from "../components/BackBtn/Back"
import Layout from "../components/Layout/Layout"

export default function AllGames({results,queries}){


  const router = useRouter()
  const page = Number(router.query.page)

  const handlePaginationNext = (e) =>{
    router.query.page = Number(router.query.page) + 1
    router.replace(router)
  }
    const handlePagination = (e)=>{
      if(router.query.page <= 1) return null

      else{
        router.query.page = router.query.page - 1
        router.replace(router)
  
      }

    }

    return(
      <div className={styles.GamesList}>
          <h1 className={styles.title}>All games</h1>
          <Layout>
            <div className={styles.container}>
                {results.map(game =>
                  <GameCard key={game.id} game={game}/>
                )}
            </div>
            <div style={{display:"flex",justifyContent:"center",gap:"24px",alignItems:"center",height:"80px"}}>
              {page == 1 ? null :
              <Back action={handlePagination}>
                    <span style={{fontSize:"14px"}} className="material-symbols-outlined icon">arrow_back</span>
                    <span>back</span>
              </Back>}
              <Back action={handlePaginationNext}>
                    <span>next</span>
                    <span style={{fontSize:"14px"}} className="material-symbols-outlined icon">arrow_forward</span>
              </Back>
            </div>
          </Layout>
         
      </div>
    )
}

export async function getServerSideProps (ctx) {
  const key = process.env.DB_KEY
  const queries = ctx.query
    const resultsData = []
  const arrayOfQueries = Object.entries(queries)
  const baseUrl = new URL("https://api.rawg.io/api/games")
  baseUrl.searchParams.set("key", key);
  baseUrl.searchParams.set("search_precise",true)
  await arrayOfQueries.forEach(q => {
    baseUrl.searchParams.set(q[0], q[1])
  })
  const response = await fetch(baseUrl)
  const json = await response.json()
  const {results} = json

  await results.forEach(e => resultsData.push({
    name:e.name,
    id:e.id,
    background_image:e.background_image,
    metacritic:e.metacritic,
    released:e.released,
    platforms:e.platforms,
    developers:e.developers,
    description:e.description,
    genres:e.genres
  }))
  return {
      props:{
        results,
        queries
      }
    }

}
