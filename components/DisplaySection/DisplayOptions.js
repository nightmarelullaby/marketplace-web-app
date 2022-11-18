import { Dropdown} from "../Dropdown/Dropdown"
import styles from "./DisplaySection.module.css"
import {useState} from "react"



export default function DisplaySection(){
    return(
            <div className={styles.container}>
                <div className={styles.dropdownContainer} >
                    <div style={{display:"flex",flexDirection:"column"}}>
                    <small>Filtros</small>
                        <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                        <Dropdown
                        query="ordering"
                        elements={[
                            {"name":"Lanzamientos recientes", "value":"released"},
                            {"name":"Mejor valorados","value":"metacritic"},
                            {"name":"Todos","value":""}]}
                        title={"Order by: "}
                        />
                    <hr className={styles.separator}></hr>
                    <Dropdown
                        query="genres"
                        elements={[
                            {"name":"Acción", "value":"4"},
                            {"name":"RPG","value":"5"},
                            {"name":"Indie","value":"51"},
                            {"name":"Shooter","value":"2"},
                            {"name":"Adventure","value":"3"},
                            {"name":"Fighting","value":"6"},
                            {"name":"Puzzle","value":"7"},
                            {"name":"Strategy","value":"10"},
                        ]}
                        title={"Genres "}
                    />


                        </div>
                    </div>
                    
                </div>
            </div>
    )
}
