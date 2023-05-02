import React from 'react';
import { memo } from 'react';
import styles from "./ProductCard.module.css"
const ProductCard = ({children,customStyles}) => {
    return (
        <div className={styles.main}style={customStyles ? customStyles : null}>
            {children}
        </div>
    );
}

export default memo(ProductCard);
