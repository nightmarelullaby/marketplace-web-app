import {useEffect,useRef} from "react"

const useClickOutside = (callback)=>{
	const buttonRef = useRef()

	const handleOutside = (e) => {
			if(!buttonRef.current.contains(e.target)){ 
				return callback()}
	}
	useEffect(()=>{
			document.addEventListener("click",handleOutside,false)
			return () => document.removeEventListener("click",handleOutside,false)
	},[])	
	return {buttonRef}
}
export default useClickOutside
