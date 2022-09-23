 import GameDetails from "./GameDetails"
 import Back from "../BackBtn/Back"

 
 const id = ({gameDetails}) => {


    return(
        <div>
            <Back/>
            <GameDetails game={gameDetails}/>
        </div>
    
    )
}
id.getInitialProps = async (ctx) => {
    const gameDetails = []
    const {query} = ctx
    const response = await fetch(`https://api.rawg.io/api/games/${query.id}?key=138396d520ee4b03827a7254e78cbb54`)
    const json = await response.json()
    const {name,
        background_image,
        description,
        genres,
        metacritic,
        id,
        platforms,
        publishers,
        developers,
        released,
        esrb_rating} 
        = json
    gameDetails.push({id:id,
        genres:genres,
        name:name,
        background_image:background_image,
        description:description,
        metacritic:metacritic,
        publishers:publishers,
        released,
        platforms,
        developers,
        esrb_rating})
    return ({gameDetails})

    
}
export default id