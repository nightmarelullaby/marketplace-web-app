import {useRouter} from "next/router"
import styles from "./Back.module.css"

const Back = () => {

    const router = useRouter()
    return(
        <div style={{marginBottom:"16px"}} >
            <span onClick={() => router.back()} className={styles.backBtn}>
                <span style={{fontSize:"14px"}} class="material-symbols-outlined">arrow_back</span>
                <span>Back</span>
            </span>
 
        </div>
    )
}
export default Back