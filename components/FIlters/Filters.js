import styles from "./Filters.module.css"
import {useState} from "react"


export default function Filters({children,style}){
	return(
		<div style={{
			width:"18vw",
			padding:16,
			borderRadius:6,
			boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
			display:"flex",
			flexDirection:"column"}}>
				<p style={{fontWeight:600}}>Filtros</p>
				<hr style={{margin:"16px 0",border:"none",height:1,backgroundColor:"lightgray"}}/> 
				<form>
				{children}
					
				</form>
		</div>)
}