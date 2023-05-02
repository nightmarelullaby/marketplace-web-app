import styles from "./Filters.module.css"
import {useState} from "react"
export default function Filters({children,triggerContent}){
	const [state,setState] = useState(false)
	const switchState = () => {
		return setState(prev => !prev)
	}
	const handleSubmit = (e)=>{
		e.preventDefault()
		const formData = Object.fromEntries(new FormData(e.target))
		console.log(formData)
	}
	return(
		<div>
			<button 
				onClick={switchState}
				className={styles.btn} 
				style={{background:"var(--black)",padding:"8px 16px",borderRadius:4,border:"none",cursor:"pointer"}}>
				<svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M3.79154 2.93825C6.46066 2.48562 9.20314 2.25 12.0001 2.25C14.7969 2.25 17.5394 2.48561 20.2085 2.93822C21.1108 3.09125 21.75 3.87676 21.75 4.77402V5.81802C21.75 6.61367 21.4339 7.37673 20.8713 7.93934L14.6893 14.1213C14.408 14.4026 14.25 14.7842 14.25 15.182V18.1094C14.25 19.2457 13.608 20.2845 12.5916 20.7927L10.8354 21.6708C10.6029 21.7871 10.3268 21.7746 10.1057 21.638C9.88459 21.5013 9.75 21.2599 9.75 21V15.182C9.75 14.7842 9.59196 14.4026 9.31066 14.1213L3.12868 7.93934C2.56607 7.37673 2.25 6.61367 2.25 5.81802V4.77404C2.25 3.87678 2.88917 3.09127 3.79154 2.93825Z" />
				</svg>

				<small className={styles.text}>
					Filters
				</small>
			</button>
			<div style={{
				marginTop:16,
				minWidth:"100px",
				height:state?"100px":0,
				overflow:"hidden",
				borderRadius:4,
				boxSizing:"content-box",
				padding:state?16:0,
				boxShadow:state?"rgb(0 0 0 / 5%) 0px 6px 24px 0px, rgb(0 0 0 / 8%) 0px 0px 0px 1px":"none",
				transition:".15s ease height"}}>
				<form  onSubmit={handleSubmit}>
					<label htmlFor="price">Precio</label>
					<br/>
					
					<input name="price" id="price" value={3} type="checkbox"/>
					<label htmlFor="price">0$ - 24$</label>
					<br/>
					<button >aplicar</button>
				</form>
			</div>
		</div>)
}