import styles from "./CategoryListElement.module.css"
import {useState,useEffect,useRef} from "react"


export default function CategoryListElement({children,active,action}){
	const [state,setState] = useState(false)
	const [classType,setClassType] = useState(state ? styles.CategoryListElementActive : styles.CategoryListElement)
	const liRef = useRef()

	function handleClickInside(event) {
		if(liRef.current.contains(event.target)){		
			setState(true)
			return;
		}
		if(event.target.classList[0] !== "CategoryListElement_CategoryListElement__ODCVz") return setClassType(styles.CategoryListElement);

		
    }
    //this function manages the state when the user clicks outside


useEffect(() => {
    document.addEventListener("click", handleClickInside,true);
    return () => document.removeEventListener("click", handleClickInside,true)
    //listener with the function above
  }, []);
	const actionWClass = () => {
		setState(prev=> !prev)
		
		if(state) {
			action()
			return setClassType(styles.CategoryListElementActive)
		}
		if(!state) return setClassType(styles.CategoryListElement)
	}
	return(
		<li ref={liRef}
			onClick={actionWClass} 
			className={classType}>
			{children}
		</li>)

}