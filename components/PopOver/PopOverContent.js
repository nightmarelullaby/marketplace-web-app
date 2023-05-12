import {motion} from "framer-motion"
import styles from "./PopOver.module.css"
import {useRef,useEffect} from "react" 

export default function PopOverContent({
	children,
	position="left",
	style,
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
      })
  }
		const observer = new IntersectionObserver(handleScroll,{      
				root:null,
      			margin:0,
      			threshold:0})
		if(popOver.current) {
			observer.observe(popOver.current)
		}



	},[state])

	const className = position === "left" ? styles.popoverLeft : position === "right" ? styles.popoverRight : position === "bottom" ? styles.popoverBottom:null

	return(
		<>
		{state ? <motion.div 
			ref={popOver}
			className={className}
			style={style ? style:{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}
			initial={{x:4,opacity:0,pointerEvents:"none",display:"none"}}
			animate={state ? {x:-0,opacity:1,pointerEvents:"all",display:"block"}:{x:4,opacity:0,pointerEvents:"none",display:"none"}}
			transition={{duration:.15}}
			>
				{children}
			</motion.div>:null}
		
		</>
		)}