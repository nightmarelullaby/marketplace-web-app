import { useState } from "react";
import { useRecoilState } from "recoil";
import ShoppingCount from "../../atoms/ShoppingCount"
import styles from "./AddCart.module.css"

const AddCart = ({
    data,
    customStyles,
    initial="Add to cart",
    second="Added"}) => {

    const initialState = <> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.25 3H3.63568C4.14537 3 4.59138 3.34265 4.7227 3.83513L5.1059 5.27209M7.5 14.25C5.84315 14.25 4.5 15.5931 4.5 17.25H20.25M7.5 14.25H18.7183C19.8394 11.9494 20.8177 9.56635 21.6417 7.1125C16.88 5.89646 11.8905 5.25 6.75 5.25C6.20021 5.25 5.65214 5.2574 5.1059 5.27209M7.5 14.25L5.1059 5.27209M6 20.25C6 20.6642 5.66421 21 5.25 21C4.83579 21 4.5 20.6642 4.5 20.25C4.5 19.8358 4.83579 19.5 5.25 19.5C5.66421 19.5 6 19.8358 6 20.25ZM18.75 20.25C18.75 20.6642 18.4142 21 18 21C17.5858 21 17.25 20.6642 17.25 20.25C17.25 19.8358 17.5858 19.5 18 19.5C18.4142 19.5 18.75 19.8358 18.75 20.25Z" stroke="#e9f6ff" strokeWidth="2.5" strokeLinecapcap="round" strokeLinecapjoin="round"/>
                            </svg>
                            <small style={{color:"#e9f6ff",fontWeight:600}}>{initial}</small>
                        </>

    const secondState = <>
                                <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="var(--blue)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        d="M4.5 12.75l6 6 9-13.5"
      ></path>
    </svg>

            <small style={{color:"#0f1214",fontWeight:400}}>{second}</small>      
    </>

    const [count,setCount] = useRecoilState(ShoppingCount)
    const [state,setState] = useState(true)
    const setTrue=() => setState(true)
    const setFalse=() => setState(true)

    const switchState = ()=> {
        setState(prev => !prev)
    }
    const switchStateWAction = (data)=> {
        setState(prev => !prev)
        const exist = count.filter(e => e === data)

        if(exist.length <= 0) return setCount(count.concat(data))

        if(exist.length >= 1) {
            setCount(count.filter(e=> e !== data))
            console.log(count)
        }
        
        
        // return action()
    }
    return (
        <>
            <button 
            
            style={customStyles ? customStyles : null}
            className={state ? styles.btn : styles.btnActive}
            onClick={data ?()=>switchStateWAction(data):switchState}>{state ? initialState:secondState }</button>
        </>
    );
}

export default AddCart;
