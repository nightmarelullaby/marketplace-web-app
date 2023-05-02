import styles from "./CloseButton.module.css"

export default function CloseButton ({action,stroke,width,height,customStyle}){
    return(
        <button 
            style={customStyle ? customStyle: null}
            className={styles.button}
            onClick={action ? action : null}>
            <svg stroke={stroke? stroke:null} className={styles.svg} width={width?width:"32"} height={height?height:"32"} viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill={stroke?stroke:null} stroke={stroke? stroke:null} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" d="M25.625 26.1375C25.5225 26.1375 25.3175 26.1375 25.215 26.035L14.965 15.785C14.76 15.58 14.76 15.2725 14.965 15.0675C15.17 14.8625 15.4775 14.8625 15.6825 15.0675L25.9325 25.3175C26.1375 25.5225 26.1375 25.83 25.9325 26.035C25.9325 26.1375 25.7275 26.1375 25.625 26.1375Z" />
              <path fill={stroke?stroke:null} stroke={stroke? stroke:null} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" d="M15.375 26.1375C15.2725 26.1375 15.0675 26.1375 14.965 26.035C14.76 25.83 14.76 25.5225 14.965 25.3175L25.215 15.0675C25.42 14.8625 25.7275 14.8625 25.9325 15.0675C26.1375 15.2725 26.1375 15.58 25.9325 15.785L15.6825 26.035C15.6825 26.1375 15.4775 26.1375 15.375 26.1375Z" />
            </svg>

        </button>
    )
}