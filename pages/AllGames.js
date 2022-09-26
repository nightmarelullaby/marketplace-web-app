import GameCard from "../components/GameList/GameCard"
import styles from "../components/GameList/GamesList.module.css"
import DisplaySection from "../components/DisplaySection/DisplayOptions"
import {useRouter} from "next/router"
import Back from "../components/BackBtn/Back"

export default function AllGames({results}){

  const router = useRouter()

  const handlePaginationNext = (e) =>{
    router.push(`?page=${Number(router.query.page)+ 1}`)
  }
    const handlePagination = (e)=>{
      e.preventDefault()
      if(router.query.page <= 1) return null
      else{
        router.push(`?page=${Number(router.query.page)- 1}`)
      }

    }

    return(
      <div className={styles.GamesList}> 
          <h1 className={styles.title}>All games</h1>
          <DisplaySection/>
          <div className={styles.container}>
              {results.map(game => 
                <GameCard key={game.id} game={game}/>
              )}
          </div>

          <Back action={handlePagination}>
                <span>back</span>
                <span style={{fontSize:"14px"}} className="material-symbols-outlined">arrow_back</span>
          </Back>
  
          <Back action={handlePaginationNext}>
                <span>next</span>
                <span style={{fontSize:"14px"}} className="material-symbols-outlined">arrow_forward</span>

          </Back>

      </div>
    )
}

export async function getServerSideProps (ctx) {
  const key = process.env.DB_KEY
  const resultsData = []
  const response = await fetch(`https://api.rawg.io/api/games?key=${key}&page=${ctx.query.page}`)
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
        results
      }
    }
  
}





