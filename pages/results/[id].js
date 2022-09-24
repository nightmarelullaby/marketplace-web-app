import GameCard from "../../components/GameList/GameCard"
import DisplaySection from "../../components/DisplaySection/DisplayOptions";
import styles from "../../components/GameList/GamesList.module.css"

export default function id({resultsData}){

    return(
    <div>
      <div className={styles.GamesList}> 
          <h1 className={styles.title}>Results</h1>
          <DisplaySection/>
          <div className={styles.container}>
              {resultsData.map(game => 
                <GameCard key={game.name} game={game}/>
              )}
          </div>
      </div>
    </div>
    )
}
id.getInitialProps = async (ctx) => {
    const {query} = ctx
    const resultsData = []
    const response = await fetch(`https://api.rawg.io/api/games?key=138396d520ee4b03827a7254e78cbb54&search=${query.id}&search_precise=true`)
    const json = await response.json()
    const {results} = json
  
    results.forEach(e => resultsData.push({
      name:e.name, 
      id:e.id,
      background_image:e.background_image,
      metacritic:e.metacritic,
      released:e.released
    }))
    return ({resultsData})
  }
  
  
  
  
