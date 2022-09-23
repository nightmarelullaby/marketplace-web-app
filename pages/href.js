import {useState,useRef,useEffect} from "react"
import Searchbar from "./Searchbar";

export default function Counter(){
    const text = useRef("")
    const [text1,setText1] = useState("")

    useEffect(()=>{
        console.log("rendered 1 ")
    },[text])

    const handleChange = (e) => {
        e.preventDefault()
        text.current = e.target.value
        console.log("rendered")

    }
        return(
            <>
            <input onChange={()=> {handleChange}} type="text"/>
                <button onClick={()=> setText1(prev => prev+= "x")}>update</button>
                <p>{text1}</p>
            </>
        )
}