import React from 'react';
import { RecoilRoot } from 'recoil';
import { useRecoilState } from "recoil";
import ShoppingCount from "../../atoms/ShoppingCount"
export const NavbarElement  = (props) => {
    return(
        <li {...props}>
            {props.children}
        </li>
    )
}
const Navbar = (props) => {
    	 const [count,setCount] = useRecoilState(ShoppingCount)
    return (
        <header style={{height:53}} {...props}>
            <nav style={{position:"fixed",zIndex:100}}>
                <ul style={{
                    backgroundColor:"#060a0f",
                    height:68,
                    width:"100vw",
                    padding:"16px 72px",
                    boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
                    listStyleType:"none",
                    display:"flex",
                    gap:16}}>
                        {props.children}
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
