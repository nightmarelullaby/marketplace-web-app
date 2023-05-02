import styles from "./UserDropdownElement.module.css"

export default function UserDropdownElement({children}){
	return(
		<li className={styles.main} style={{display:"flex",gap:6,padding:12}}>
			{ children }
		</li>
		)
}