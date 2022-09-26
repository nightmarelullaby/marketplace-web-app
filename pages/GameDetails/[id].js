 import GameDetails from "../../components/Game/GameDetails"
 import Back from "../../components/BackBtn/Back"
import { useRouter } from "next/router"
 
 const Id = ({json}) => {

    const router = useRouter()
    const handleback = () => router.back()
    return(
        <div>
            <Back action={handleback}>
                <span style={{fontSize:"14px"}} className="material-symbols-outlined">arrow_back</span>
                <span>Back</span>
            </Back>
            <GameDetails game={json}/>
        </div>
    
    )
}
export async function getServerSideProps(ctx){
    const key = process.env.DB_KEY
    const gameDetails = []
    const {query} = ctx
    const response = await fetch(`https://api.rawg.io/api/games/${ctx.query.id}?key=${key}`)
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
    return {
        props:{json}
    }

    
}
export default Id