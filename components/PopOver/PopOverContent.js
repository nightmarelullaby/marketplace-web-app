import {motion} from "framer-motion"
import styles from "./PopOver.module.css"
import {useRef,useEffect} from "react" 

export default function PopOverContent({
	children,
	position="left",
	state}){
	const popOver = useRef()

	useEffect(()=>{

	const handleScroll = (entry,observador)=>{
      entry.forEach(entry =>{

      	if(entry.isIntersecting){
      		if(entry.boundingClientRect.right > entry.rootBounds.width-100) {
			return entry.target.style.right = 0
			}
			if(entry.boundingClientRect.left < 10) {
			return entry.target.style.left = 0
			}
			console.log(entry.boundingClientRect.left)
      	}
		// if(entry.boundingClientRect.left < entry.rootBounds.width) {
		// 	entry.target.style.left = 0
		// 	console.log(entry)
		// }
		// if(entry.target.style.opacity >0 && entry.boundingClientRect.left < entry.rootBounds.width) entry.target.style.left = 0

        // if(!entry.isIntersecting && entry.target.style.opacity > 0) {
        	// entry.target.style.right = "0"
        
          	// console.log(entry)
          

          	// console.log(entry.target.style.opacity)
        // } else{
        	// console.log(entry)
        	// console.log("yes",entry)
        	          	// console.log(opacity)
          	// console.log(entry.target.style.opacity)
        	
        	// console.log("is visible")
			// console.log(entry)
        // }
      })
  }
		const observer = new IntersectionObserver(handleScroll,{      
				root:null,
      			margin:0,
      			threshold:0})
		if(popOver.current) {
			observer.observe(popOver.current)
		// 	// return () => observer.unobserve(popOver.current)
		}



	},[state])

	const className = position === "left" ? styles.popoverLeft : position === "right" ? styles.popoverRight : position === "bottom" ? styles.popoverBottom:null

	return(
		<>
		{state ? <motion.div 
			ref={popOver}
			className={className}
			initial={{x:4,opacity:0,pointerEvents:"none",display:"none"}}
			animate={state ? {x:-0,opacity:1,pointerEvents:"all",display:"block"}:{x:4,opacity:0,pointerEvents:"none",display:"none"}}
			transition={{duration:.15}}
			>
				{children}
			</motion.div>:null}
		
		</>
		)}