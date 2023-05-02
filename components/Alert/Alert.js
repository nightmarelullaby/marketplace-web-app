import React from 'react';
import CloseButton from "../../components/Buttons/CloseButton"
import {motion} from "framer-motion"
import {AlertState} from "../../atoms/AlertState"
import { useRecoilState } from 'recoil';
const Alert = () => {
    const [alert,setAlert] = useRecoilState(AlertState)
    
    function handleExit(){
        return setAlert({
            show:false,
            title:alert.title,
            description:alert.description
        })
    }
    return (
              <motion.div 
            initial={{y:3,opacity:0}}
            animate={alert.show && alert.type==="error"? {y:0,opacity:1,pointerEvents:"all"} : {y:3,opacity:0,pointerEvents:"none"}}
            transition={{ duration:.13,type:"keyframes" }}
            style={{
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                borderRadius:4,
                position:"fixed",
                display:"inline-flex",
                flexDirection:"column",
                gap:16,
                zIndex:30000000000000000,
                bottom:0,
                opacity:0,
                left:"50%",
                translate:"-50% -50%",
                minWidth:"150px",
                background:"rgb(255 223 226 / 100%)",
                }}>
                    <div style={{padding:"16px"}}>
                <div style={{textAlign:"start",display:"flex",gap:16,alignItems:"center"}}>
                <svg width="28" style={{flexGrow:1}} height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.9998 9.00006V12.7501M2.69653 16.1257C1.83114 17.6257 2.91371 19.5001 4.64544 19.5001H19.3541C21.0858 19.5001 22.1684 17.6257 21.303 16.1257L13.9487 3.37819C13.0828 1.87736 10.9167 1.87736 10.0509 3.37819L2.69653 16.1257ZM11.9998 15.7501H12.0073V15.7576H11.9998V15.7501Z" stroke="rgb(163 51 51)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div>
                    <p  style={{whiteSpace:"nowrap",fontWeight:500,color:"rgb(163 51 51)"}}>{alert.title}</p>
                    <small style={{whiteSpace:"nowrap",fontWeight:400,color:"#8f5252"}} >{alert.description}</small>
                </div>
                <hr style={{height:"16px",margin:"0 8px",width:.5,background:"rgb(163 51 51)",border:"none"}}/>
                <CloseButton width="22" height="22" stroke="rgb(163 51 51)" action={()=>handleExit()}/>
                </div>


                    </div>
            </motion.div>
    );
}

export default Alert;
