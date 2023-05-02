import React from 'react';
import styles from "./MoreButton.module.css"
const MoreButton = ({action,color="white",children,customStyles,height=20,strokeWidth=1.5,width=20}) => {
    return (
        <div>
            <button 
                className={styles.MoreButton}
                style={customStyles ? customStyles:null} 
                onClick={action}>
                {children}
                <svg stroke={color} className={styles.arrow} height={height} width={width}viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.25 8.25L21 12M21 12L17.25 15.75M21 12H3"  stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
    );
}

export default MoreButton;