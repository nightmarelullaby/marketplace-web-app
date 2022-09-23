import styles from "./Rate.module.css"

export default function Rate({rate,margin}){
    return(
        <div alt="metacritic rate" style={margin ? {marginLeft:"auto"}: null} className={styles.circle}>
            <small className={styles.small}>{rate}</small>
        </div>
    )
}