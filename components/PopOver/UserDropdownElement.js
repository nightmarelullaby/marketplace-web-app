import styles from "./UserDropdownElement.module.css"

export default function UserDropdownElement({children,action}){
	return(
		<li onClick={action}
			className={styles.main} 
			style={{display:"flex",gap:6,padding:"8px 16px"}}>
				{ children }
				
		</li>
		)
}