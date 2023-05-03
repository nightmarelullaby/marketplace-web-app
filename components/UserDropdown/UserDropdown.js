import UserDropdownElement from "../PopOver/UserDropdownElement"
import Checkbox from "../Checkbox/Checkbox"
import {useEffect,useState,useRef} from "react"

export default function UserDropdown(){
	const [state,setState] = useState(false)
	const switchState = (e) => {
		return setState(!state)
	}

	const dropdown = useRef()
	const handleOutside = (e) => {
		if(!dropdown.current.contains(e.target)) return setState(false)

	}
	useEffect(()=>{
		document.addEventListener("click",handleOutside,false)
		return () => document.removeEventListener("click",handleOutside,false)
	},[state])

	return(
		<div ref={dropdown} style={{position:"relative",display:"flex",alignItems:"center"}}>
		<button onClick={switchState} style={{position:"relative",cursor:"pointer",backgroundColor:"transparent",border:"none",display:"inline-flex",alignItems:"center"}}>
			<svg fill="none" width="18" height="18" stroke="var(--light)" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  				<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path>
			</svg>
		</button>

		<div style={state?{opacity:1,transition:".15s ease",position:"absolute",borderRadius:4,backgroundColor:"white",top:"200%",right:0,translate:"0 0"}:{translate:"8px -8px",opacity:0,position:"absolute",borderRadius:4,backgroundColor:"white",top:"200%",right:0,pointerEvents:"none"}}>
		<div style={{display:"flex",flexDirection:"column",gap:4}}>
			<div style={{padding:"12px 16px",display:"flex",gap:8,alignItems:"center"}}>
				<svg fill="black" width="24" height="24"stroke="black" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
			  		<path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"></path>
				</svg>
				<div style={{display:"flex",flexDirection:"column"}}>
					<p style={{whiteSpace:"nowrap",fontWeight:500}}>Default user</p>
					<small style={{whiteSpace:"nowrap",color:"gray"}}>defaultuser@gmail.com</small>
				</div>
			</div>
			<hr style={{height:1,backgroundColor:"lightgray",border:"none"}}/>
			<div style={{padding:"6px 16px 3px 16px",display:"flex",gap:8,alignItems:"center"}}>
				<svg fill="none" width="18" height="18" stroke="rgb(6, 10, 15)" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  					<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path>
				</svg>
				<small style={{whiteSpace:"nowrap",color:"rgb(6, 10, 15)"}}>Account settings</small>
			</div>
			<div style={{padding:"6px 16px 6px 16px",display:"flex",gap:8,alignItems:"center"}}>
				<svg fill="none" width="18" height="18" stroke="rgb(6, 10, 15)" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  					<path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"></path>
				</svg>
				<div style={{display:"flex",width:"100%",justifyContent:"space-between"}}>
					<small style={{whiteSpace:"nowrap",color:"rgb(6, 10, 15)"}}>Dark Mode</small>
					<Checkbox/>
				</div>
			</div>
		</div>
		<hr style={{height:1,backgroundColor:"lightgray",border:"none"}}/>
		<div style={{padding:"16px 16px",display:"flex",gap:8,alignItems:"center"}}>
				<svg fill="none" width="18" height="18" stroke="red" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  					<path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"></path>
				</svg>
				<div style={{display:"flex",width:"100%",justifyContent:"space-between"}}>
					<small style={{whiteSpace:"nowrap",color:"red"}}>Log out</small>
				</div>
			</div>
		</div>
		</div>)
}
