import React from 'react';
import { useRecoilState } from 'recoil';
import ShoppingCount from "../../atoms/ShoppingCount"
import PopOver from '../PopOver/PopOver';
import PopOverTrigger from '../PopOver/PopOverTrigger';
import PopOverContent from '../PopOver/PopOverContent';
import MoreButton from '../Buttons/MoreButton'
import Button from '../Buttons/Button'

import Link from "next/link";
const ShoppingCart = ({color="white"}) => {
    const [count,setCount] = useRecoilState(ShoppingCount)
    console.log(count)
    return (
        <PopOver>
            <PopOverTrigger>
                <div style={{position:"relative",display:"flex",alignItems:"center"}}>
                    <svg width="18" height="18" stroke={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.25 3H3.63568C4.14537 3 4.59138 3.34265 4.7227 3.83513L5.1059 5.27209M7.5 14.25C5.84315 14.25 4.5 15.5931 4.5 17.25H20.25M7.5 14.25H18.7183C19.8394 11.9494 20.8177 9.56635 21.6417 7.1125C16.88 5.89646 11.8905 5.25 6.75 5.25C6.20021 5.25 5.65214 5.2574 5.1059 5.27209M7.5 14.25L5.1059 5.27209M6 20.25C6 20.6642 5.66421 21 5.25 21C4.83579 21 4.5 20.6642 4.5 20.25C4.5 19.8358 4.83579 19.5 5.25 19.5C5.66421 19.5 6 19.8358 6 20.25ZM18.75 20.25C18.75 20.6642 18.4142 21 18 21C17.5858 21 17.25 20.6642 17.25 20.25C17.25 19.8358 17.5858 19.5 18 19.5C18.4142 19.5 18.75 19.8358 18.75 20.25Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {count.length === 0?null : <div style={{position:"absolute",top:-10,left:"100%",backgroundColor:"var(--blue)",borderRadius:32,width:20,height:20}}>
                        <p style={{position:"absolute",top:"%50",left:"50%",translate:"-50% -5%",fontWeight:500,color:"var(--light)"}}>{count.length}</p>
                    </div>}
                    
                </div>
            </PopOverTrigger>
            <PopOverContent position="bottom">
                <ul style={{display:"flex",flexDirection:"column",justifyContent:"space-between",gap:16}}>
                <div style={{display:"flex",backgroundColor:"#f7f7f7",padding:16,borderRadius:4,justifyContent:"space-between",gap:24,alignItems:"center"}}>
                    <p style={{fontSize:20,color:"black",fontWeight:700,whiteSpace:"nowrap"}}>Mi carrito({count.length})</p>
                    <MoreButton><small style={{whiteSpace:"nowrap",fontWeight:500}}>Ver todas</small></MoreButton>
                </div>
                    
                    {count.length <=0 ? <div style={{padding:0}}><p style={{whiteSpace:"nowrap",fontWeight:500,color:"var(--blue)"}}>Nothing yet..</p></div>: 

                        count.map(e=><>
                            
                            <li style={{padding:16,borderBottom:"1px solid lightgray",display:"flex",gap:16}}>
                                <img width="64" height="64" style={{objectFit:"cover",borderRadius:4}}src={`https://${e.imageUrl}`}/>
                                <div style={{display:"flex",flexDirection:"column"}}>
                                    <small style={{color:"gray"}}>{e.brandName}</small>
                                    <p style={{fontSize:18,fontWeight:500,width:400,whiteSpace:"wrap"}}>{e.name}</p>
                                    <small style={{color:"gray",fontWeight:400,whiteSpace:"nowrap"}}>Colour: {e.colour}</small>
                                    <p style={{marginLeft:"auto",fontSize:18,fontWeight:500}}>$ {e.price.current.value}.00</p>
                                    
                                    {/*<p>{e.productType}</p>*/}
                                </div>

                    </li></>)}
                        <div style={{padding:"0 16px 16px 16px"}}>
                    <Button customStyles={{cursor:"pointer",border:"none",width:"100%",backgroundColor:"var(--dominant-blue)",borderRadius:6,padding:"16px 16px",marginTop:16}}>
                        <Link href="/checkout/randomid">
                            <small style={{color:"white",fontWeight:600}}>Go to payment</small> 
                        </Link>
                    </Button>
                    </div>
                </ul>
                {/*{count.length <=0?null :  }*/}
                
            </PopOverContent>
        </PopOver>
    );
}

export default ShoppingCart;
