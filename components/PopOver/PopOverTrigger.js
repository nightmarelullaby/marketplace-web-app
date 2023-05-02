export default function PopOverTrigger({ children,onClick }){
	return(
		<>
			<button 
				onClick={()=>onClick()}
				style={{
					cursor:"pointer",
					backgroundColor:"transparent",
					border:"none"}}>

						{children}
			</button>
		</>)
}