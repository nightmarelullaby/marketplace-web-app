import styles from "./DisplayOptions.module.css"
import { useState } from "react"


export default function Dropdown({title}){
    const [dropdown, setDropdown] = useState(false)

    // const HandleDropdownVisibility = () => {
    //     setDropdown(!dropdown)
    //     console.log("click")
    // }

    return(
        <div  className={styles.container} style={{position:"relative",zIndex:"100"}}>
                <button className={styles.button}>{title} <strong> Top rated</strong> { dropdown ? <span className="material-symbols-outlined">chevron_right</span> : <span className="material-symbols-outlined">expand_more</span>}</button>
                <ul className={styles.buttonOptions}>
                    <li className={styles.buttonOptions_element}>Soon...</li>
                    <li className={styles.buttonOptions_element}>Soon...</li>
                    <li className={styles.buttonOptions_element}>Soon...</li>
                </ul>
        </div>
    )
}