import styles from "./Label.module.css"

const Label = ({content}) => {
    return(
        <>
            <p className={styles.label}>{content}</p>
        </>
    )
}
export default Label