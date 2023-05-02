import React from 'react';

const Button = ({action,children,customStyles}) => {
    return (
        <div>
            <button style={customStyles ? customStyles:null} onClick={action}>{children}</button>
        </div>
    );
}

export default Button;
