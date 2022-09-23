import styles from "./Button.module.css"
import Link from "next/link"

const Button = ({href,as,children}) => {
    return(
        <>
        <Link as={as ? as: ""} href={href ? href: ""}>
          <a className={styles.button}>
            {children}
          </a>
        </Link>
        </>
    )
}

export default Button