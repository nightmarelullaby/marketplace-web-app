import styles from "./DisplayOptions.module.css"

export default function DisplayOptions(){
    return(
        <div className={styles.container}>
            <span>Display </span>
            <span style={{userSelect:"none", cursor:"pointer"}} className="material-symbols-rounded">table_rows</span>
            <span style={{userSelect:"none", cursor:"pointer"}} className="material-symbols-rounded">grid_view</span>
        </div>
    )
}