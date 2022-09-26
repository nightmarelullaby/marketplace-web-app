import DisplayOptions from "../Dropdown/DisplayOptions"
import Dropdown from "../Dropdown/Dropdown"
import styles from "./DisplaySection.module.css"


export default function DisplaySection(){
    return(
        <div>
            <div className={styles.container}>
                <DisplayOptions/>
                <div className={styles.dropdownContainer} >
                    <Dropdown title={"Order by: "}/>
                    <hr className={styles.separator}></hr>
                    <Dropdown title={"Genres "}/>
                </div>

            </div>
        </div>
    )
}