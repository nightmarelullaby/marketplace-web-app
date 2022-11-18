import {useState} from "react"
import {motion} from "framer-motion"

const PopOver = ({children,value}) => {
    const [open,setOpen] = useState(value)
    return (
        <motion.ul 
        animate={value ? {position:"absolute"}:{display:"none"}}
        style={{listStyleType:"none"}}>
            {typeof children ==="object" ? children : children.map(e => <li>{e}</li>)}
        </motion.ul>
    )
}

export default PopOver;
