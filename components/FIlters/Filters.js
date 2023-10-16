import styles from "./Filters.module.css"
import React,{useState,useEffect,forwardRef,useRef,createRef,cloneElement} from "react"
export function FilterCategoryHeader(props){
	return(
		<>
			<p style={{color:"black",fontWeight:600}}>{props.children}</p>
		</>)
}
export const FilterCheckBox = forwardRef((props,ref) => {
	return(
		<>
         <div style={{display:"flex",gap:8}}>
         	<input {...props} ref={ref} type="checkbox"/>
         	<label><p style={{color:"gray"}}>{props.title}</p></label>
         </div>
         </>
		)
})

export function WrapperFilterCheckBox(props){

	let childrenRef = useRef([])

	const uncheckOthers = (ref) => {
		const a = childrenRef.current.filter(e => e !== ref)
		console.log(a, ref)
	}
	// useEffect(()=>{
	// 	console.log(childrenRef)
	// },[childrenRef])    

	return(
		<>
			{React.Children.map(props.children, (child, index) =>
        		cloneElement(child, {
          		ref: (ref) => (childrenRef.current[index] = ref),
          		onClick:(ref)=> uncheckOthers(ref)
        })
      )}
			<button onClick={()=> console.log(childrenRef)}> reveal refs</button>
		</>)
}

export default function Filters(props){
	return(
		<form  className={styles.Wrapper} {...props}>
			{props.children}
		</form>)
}

