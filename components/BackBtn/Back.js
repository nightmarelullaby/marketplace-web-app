import {useRouter} from "next/router"
import styles from "./Back.module.css"

const Back = ({action,children}) => {
    console.log()
    const router = useRouter()
    return(
        <div style={{marginBottom:"16px"}} >
            <button onClick={() => action ? action(): null} className={styles.backBtn}>
                {children}
                
            </button>
 
        </div>
    )
}
export default Back