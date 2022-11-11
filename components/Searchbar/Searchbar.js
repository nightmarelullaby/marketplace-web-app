import {useRef} from "react"
import { useRouter } from "next/router"
import styles from "./Searchbar.module.css"

export default function Searchbar(){
    var inputValue = useRef("")
    const router = useRouter()

    function handleChange(e){
        e.preventDefault()
        inputValue.current = e.target.value
    }


    function handleSubmit(e){
       e.preventDefault()
       const searchParam = inputValue.current
       if(inputValue.current === "") return;
        delete router.query.id
        router.pathname = `/results/${searchParam}`
        router.query.search = searchParam
        router.replace(router)
    }
    return(
        <div className={styles.formContainer}>
            <form onChange={(e)=>handleChange(e)} onSubmit={(e)=>handleSubmit(e)} className={styles.formContainer}>
                <input placeholder="Search a game.." className={styles.inputText} onChange={(e)=> handleChange(e)} type="text" />
                <button className={styles.formButton} onClick={(e) => e.preventDefault}><span className="material-symbols-outlined">search</span></button>
            </form>
        </div>
    )
}
