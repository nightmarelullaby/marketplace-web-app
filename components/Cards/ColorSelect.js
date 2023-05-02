import {useState} from "react"

export default function ColorSelect({padding=16,color="rgb(6, 10, 15)"}){
	const initialStyle = {
		display:"inline-flex",
		padding:padding,
		cursor:"pointer",
		borderRadius:100,
		backgroundColor:color,
		// boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
		border:"4px solid white",
		outline:"2px solid white"}

	const secondStyle = {
				display:"inline-flex",
		padding:padding,
		backgroundColor:"rgb(6, 10, 15)",
		borderRadius:100,
		backgroundColor:color,
		cursor:"pointer",
		border:"4px solid white",
		outline:`2px solid ${color}` ,
		// boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
	}

	const [actualStyle,setStyle] = useState(true)

	const switchStyle = () => {
		return setStyle(prev => !prev)
	}
	return(
		<div onClick={switchStyle} 
			style={actualStyle?initialStyle:secondStyle}>
			
				<div style={{color:actualStyle?"black":"white",fontWeight:500}}></div>
				
		</div>)
}