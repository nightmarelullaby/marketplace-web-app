import {useState} from "react"

const useCounter  = () => {
	const [state,setState] = useState(0)

	const increment = () =>{
		setState(prev => prev+1)
	}
	const decrease = () =>{
		if(state  === 0) return;
		setState(prev => prev-1)
	}
	const reset = () =>{
		setState(0)
	}
	return {state,increment,decrease,reset}
}
export default function Counter(){
	const {state,increment,decrease,reset} = useCounter()
	return(
		<div style={{boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",display:"inline-flex",alignItems:"center",padding:"8px 8px",backgroundColor:"white",gap:16,borderRadius:6}}>
			<button style={{border:"none",borderRight:"1px solid lightgray",padding:"8px 16px",cursor:"pointer",backgroundColor:"transparent"}} onClick={decrease}>
				<svg fill="none" width="16" height="16" stroke="black" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  					<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15"></path>
				</svg>				
			</button>
			<div style={{padding:"8px 16px",backgroundColor:"white"}}>
				<small style={{userSelect:"none",fontFamily:"Plus Jakarta Sans",fontWeight:600,color:"black"}}>{state}</small>
			</div>
			<button style={{border:"none",borderLeft:"1px solid lightgray",padding:"8px 16px",cursor:"pointer",backgroundColor:"transparent"}} onClick={increment}>
				<svg fill="none" width="16" height="16" stroke="black" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  					<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path>
				</svg>
			</button>
		</div>
		)
}