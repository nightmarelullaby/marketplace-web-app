import styles from "./InputText.module.css"

export default function InputText({placeholder="Escribe tu email",style}){	
	return(
		<input 
		className={styles.input}
		placeholder={placeholder} 
		style={style?style:{}}/>
		)	
}

