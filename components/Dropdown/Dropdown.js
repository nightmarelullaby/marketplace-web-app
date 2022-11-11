import styles from "./DisplayOptions.module.css"
import {motion} from "framer-motion";
import { useState,useEffect,useRef } from "react";
import { useRouter } from "next/router";

const useFilters = () => {
    const router = useRouter()
    const [filters,setFilters] = useState([])

    const addFilter = async (e) => {

        const queryName = e.target.id
        const value = e.target.value

        if(e.target.checked){
            // router.replace({query:{
            //     page:router.query.page,
            //     genres:router.query.genres,
            //     search:router.query.search,
            //     [queryName]:value}
            // })
            if(queryName !== "genres"){
              router.query[queryName] = `-${value}`
            }
            else{
              router.query[queryName] = `${value}`
            }
            e.target.checked = true
            return router.replace(router)
        }
        if(!e.target.checked) {
            // e.target.checked === false
            // router.replace({query:{
            //     genres:router.query.genres,
            //     search:router.query.search,
            //     page:router.query.page,}
            // })

            delete router.query[queryName]
            e.target.checked = false
            return router.replace(router)
        }

    }
    return{
        filters,
        addFilter}
}

const useDropdown = () => {
    const [dropdown, setDropdown] = useState(false)

    const setFalse = () =>{
        return setDropdown(false)
    }
    const setTrue = () =>{
        return setDropdown(true)
    }

    const setSwitch = () =>{
        return setDropdown(!dropdown)
    }
    return({
        setFalse,
        setTrue,
        setSwitch,
        dropdown
    })
}

export function Dropdown({title,elements,query}){
    const router = useRouter()
    const {dropdown, setSwitch,setFalse} = useDropdown()
    const dropdownMenu = useRef()
    const {filters,addFilter} = useFilters()


    useEffect(() =>  {
        document.addEventListener("click",handleClickOutside,true)
        return() => document.removeEventListener("click",handleClickOutside,true)
    },[])
    const handleClickOutside = (e)=>{
        if(!dropdownMenu.current.contains(e.target)){
            setFalse()
        }else{
            return null;
        }
    }

    return(
        <div  className={styles.container} style={{position:"relative",zIndex:"100"}}>
                <button onClick={setSwitch} className={styles.button}>{title}
                 { dropdown ? <span style={{fontSize:"20px"}} className="material-symbols-outlined">chevron_right</span> :
                 <span style={{fontSize:"20px"}} className="material-symbols-outlined">expand_more</span>}</button>

                <motion.div
                    ref={dropdownMenu}
                    animate={dropdown ?{y:"48px",opacity:1,width:"130%",right:0,top:"0%",position:"absolute"} :
                    {y:"35px",opacity:0,pointerEvents:"none",width:"130%",right:0,top:"0%",position:"absolute"}}
                    transition={{type:"just",duration:.18}}
                    className={styles.buttonOptions}>
                    <ul style={{listStyleType:"none"}}>
                        {elements ? elements.map(e =>
                            <li key={e.value} className={styles.buttonOptions_element}>
                                <input
                                    id={query}
                                    query={query}
                                    checked={router.query.ordering === e.value ? true : false}
                                    onChange={addFilter}
                                    value={e.value}
                                    type="checkbox"
                                />

                                <lable
                                    className={styles.option}
                                    htmlFor>{e.name}
                                </lable>

                            </li>):null}
                    </ul>
                </motion.div>
        </div>
    )
}
export default useFilters
