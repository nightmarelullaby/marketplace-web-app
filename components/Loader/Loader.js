import styles from "./Loader.module.css"

export const Loader = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.text}>Cargando...</h2>
            <div className={styles.loaderContainer}>
                <div className={styles.loader}></div>
            </div>
        </div>
    )
}