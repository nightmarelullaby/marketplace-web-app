import styles from "./ListBox.module.css";
import {motion} from "framer-motion"
import {useState,useEffect,useRef} from "react"

export default function ListBox({children,title}){
  const motionUl = useRef()
  const [dropdown,setDropdown] = useState(false)

  useEffect(()=>{
    document.addEventListener("click",handleOutside,true)
    return () => document.removeEventListener("click",handleOutside,true)

  },[])
  const handleOutside = (e) => {
    if(!motionUl.current.contains(e.target)){
          handleDropdownFalse();
       }else{
          return null;
       }
  }

  const handleDropdown = () => {
    return setDropdown(prev => !prev)
  }
  const handleDropdownTrue = () => {
    return setDropdown(true)
  }
  const handleDropdownFalse = () => {
    console.log("dropdown false")
    return setDropdown(false)
  }
  return(
    <div ref={motionUl}>
        <button
          onClick={()=>handleDropdown()}
          className={dropdown ? styles.mainButtonActive : styles.mainButton}>
            click me
        </button>

        <motion.ul 
          animate={dropdown ? {opacity:1,y:"10px"}:{opacity:0,y:"8px",display:"none"}}
          transition={{duration:.14}}
          className={styles.dropdownContainer}>
              {/* {console.log(children)} */}
             {children.map((e,index) =>
              <li 
                key={index} 
                className={e.props.id ? styles.element:null}>{e}</li>)}
        </motion.ul>
    </div>
  )
}
