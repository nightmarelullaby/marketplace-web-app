import styles from "./PopOverLi.module.css"
export default function PopOverLi({children}){
	return(
		<li className={styles.PopOverLi}style={{display:"flex",gap:8,alignItems:"center"}}>
			{children}
			<svg className={styles.arrow} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.25 8.25L21 12M21 12L17.25 15.75M21 12H3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>


		</li>
		)
}