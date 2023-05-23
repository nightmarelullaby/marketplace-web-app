import {useState} from "react"
import { RecoilRoot } from 'recoil';
import { useRecoilState } from "recoil";
import ShoppingCount from "../../atoms/ShoppingCount"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import UserDropdown from "../UserDropdown/UserDropdown"

export const NavbarResponsiveElement  = (props) => {
    return(
        <li {...props}>
            {props.children}
        </li>
    )
}
const NavbarResponsive = (props) => {
    	 const [count,setCount] = useRecoilState(ShoppingCount)
         const [show, setShow] = useState(false)
    return (
        <header  {...props} >
            <nav style={{position:"fixed",width:"100%",zIndex:100}}>
                <ul style={{
                    backgroundColor:"#060a0f",
                    backdropFilter:"blur(4px)",
                    width:"100%",
                    height:68,
                    padding:"16px 0 ",
                    boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
                    listStyleType:"none",
                    display:"flex",
                    gap:16}}>
                        <NavbarResponsiveElement style={{marginLeft:"auto",display:"flex",alignItems:"center"}}>
                            <ShoppingCart color="var(--light)"/>
                        </NavbarResponsiveElement>
                        <NavbarResponsiveElement style={{display:"flex",alignItems:"center"}}>
                            <UserDropdown />
                        </NavbarResponsiveElement>
                        {!show && <NavbarResponsiveElement  onClick={()=>setShow(!show)} style={{cursor:"pointer",margin:"0 24px 0 0"}}>
                            <svg fill="none" stroke="white" width="32" height="32" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
                            </svg>
                        </NavbarResponsiveElement >}
                        

                </ul>
            </nav>
            {show && <nav style={{backgroundColor:"rgb(6 10 15 / 55%)",backdropFilter:"blur(4px)",zIndex:10000,height:"100vh",position:"fixed",right:0,width:"70%"}}>
      
                <NavbarResponsiveElement onClick={()=>setShow(!show)}style={{cursor:"pointer",height:68,margin:"0 24px 0 0",display:"flex",alignItems:"center",justifyContent:"end"}}>
                    <svg fill="none" stroke="white" width="32" height="32" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </NavbarResponsiveElement>
                <hr style={{width:"100%",border:"none",height:1,backgroundColor:"lightgray"}}/>
                <ul style={{padding:24,gap:24,display:"flex",flexDirection:"column",alignItems:"end"}}>
                    {props.children}    
                </ul>
                
            </nav>}

            
        </header>
    );
}

export default NavbarResponsive;
