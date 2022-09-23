import GameCard from "./GameCard"
import styles from "./GamesList.module.css"
import DisplaySection from "../DisplaySection/DisplayOptions"
import {useRouter} from "next/router"
import Link from "next/link"

export default function AllGames({resultsData,query}){


  const router = useRouter()
    const handlePagination = (e)=>{
      e.preventDefault()
      if(query.page <= 1) return null
      else{
        router.push(`?page=${Number(query.page)- 1}`)
      }

    }

    return(
      <div className={styles.GamesList}> 
          <h1 className={styles.title}>Lastest launches</h1>
          <DisplaySection/>
          <div className={styles.container}>
              {resultsData.map(game => 
                <GameCard key={game.id} game={game}/>
              )}
          </div>
          <button onClick={(e)=> handlePagination(e)}>Back</button>
          <button onClick={()=> router.push(`?page=${Number(query.page)+ 1}`)} >Next</button>
      </div>
    )
}

AllGames.getInitialProps = async ({query }) => {

  const resultsData = []
  const response = await fetch(`https://api.rawg.io/api/games?key=138396d520ee4b03827a7254e78cbb54&page=${query.page}`)
  const json = await response.json()
  const {results} = json

  results.forEach(e => resultsData.push({
    name:e.name, 
    id:e.id,
    background_image:e.background_image,
    metacritic:e.metacritic,
    released:e.released
  }))
  return ({resultsData,query})
}





