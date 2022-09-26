import styles from "./Footer.module.css"

export const Footer = () => {
    return(
        <>
            <footer className={styles.footer}>
                <div className={styles.footerColumn}>
                    <ul className={styles.footerColumn_ul}>
                        <li>Contacto</li>
                        <li>Redes</li>
                        <li>Información</li>
                    </ul>
                </div>
                <div className={styles.footerColumn}>
                    <p>Web creada con fines educativos</p>
                </div>
            </footer>
        </>

    )
}