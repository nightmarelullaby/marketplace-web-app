import React from 'react';
import { RecoilRoot } from 'recoil';
import { useRecoilState } from "recoil";
import ShoppingCount from "../../atoms/ShoppingCount"
export const NavbarElement  = ({children,style}) => {
    return(
        <li style={style ? style:null}>
            {children}
        </li>
    )
}
const Navbar = ({children}) => {
    	 const [count,setCount] = useRecoilState(ShoppingCount)
    return (
        <header style={{height:53}} >
            <nav style={{position:"fixed",zIndex:100}}>
                <ul style={{
                    backgroundColor:"#060a0f",
                    
                    width:"100vw",
                    padding:"16px 72px",
                    boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
                    listStyleType:"none",
                    display:"flex",
                    gap:16}}>
                        {children}
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
