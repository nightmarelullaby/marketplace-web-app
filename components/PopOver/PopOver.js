import {useState,useRef,useEffect,Children,cloneElement} from "react"
import styles from "./PopOver.module.css"

export const usePopOverState = () => {
	const [popOverState,setState] = useState(false)

	const switchState = () => {
		return setState(prev => !prev)
	}

	const setFalse = () => {
		return setState(false)
	}

	const setTrue = () => {
		return setState(true)
	}

	return {
		popOverState,
		switchState,
		setFalse,
		setTrue
	}
}

export default function PopOver({children, handleOutside }){
	const {popOverState,switchState,setFalse,setTrue} = usePopOverState()
	const buttonRef = useRef()
	//ref of the button
	const childrenWithProps = Children.map(children, child => {
		return cloneElement(child,{
			onClick:switchState,
			state:popOverState})
		return child
	})
	function handleClickInside(event) {
    	if(buttonRef.current.contains(event.target)){
    		return;
    	}	
    	return setFalse()
    }
    //this function manages the state when the user clicks outside


useEffect(() => {
    document.addEventListener("click", handleClickInside,true);
    return () => document.removeEventListener("click", handleClickInside,true)
    //listener with the function above
  }, []);

	return(
		<div 
			ref={buttonRef}
		 	style={{position:"relative",display:"inline-flex",alignItems:"center"}}>
				{childrenWithProps}
		 	
		</div>
		)
}