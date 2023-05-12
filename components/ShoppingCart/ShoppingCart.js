import React from 'react';
import { useRecoilState,useRecoilValue } from 'recoil';
import ShoppingCount,{item,FilterShoppingCart} from "../../atoms/ShoppingCount"
import PopOver from '../PopOver/PopOver';
import PopOverTrigger from '../PopOver/PopOverTrigger';
import PopOverContent from '../PopOver/PopOverContent';
import MoreButton from '../Buttons/MoreButton'
import Button from '../Buttons/Button'
import Link from "next/link";
const ShoppingCart = ({color="white"}) => {
    const [list,setList] = useRecoilState(FilterShoppingCart) 
    return (
        <PopOver>
            <PopOverTrigger>
                <div style={{position:"relative",display:"flex",alignItems:"center"}}>
                    <svg width="18" height="18" stroke={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.25 3H3.63568C4.14537 3 4.59138 3.34265 4.7227 3.83513L5.1059 5.27209M7.5 14.25C5.84315 14.25 4.5 15.5931 4.5 17.25H20.25M7.5 14.25H18.7183C19.8394 11.9494 20.8177 9.56635 21.6417 7.1125C16.88 5.89646 11.8905 5.25 6.75 5.25C6.20021 5.25 5.65214 5.2574 5.1059 5.27209M7.5 14.25L5.1059 5.27209M6 20.25C6 20.6642 5.66421 21 5.25 21C4.83579 21 4.5 20.6642 4.5 20.25C4.5 19.8358 4.83579 19.5 5.25 19.5C5.66421 19.5 6 19.8358 6 20.25ZM18.75 20.25C18.75 20.6642 18.4142 21 18 21C17.5858 21 17.25 20.6642 17.25 20.25C17.25 19.8358 17.5858 19.5 18 19.5C18.4142 19.5 18.75 19.8358 18.75 20.25Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {list.length === 0?null : <div style={{display:"inline-flex",alignItems:"center",position:"absolute",top:-10,left:"100%",backgroundColor:"var(--light)",borderRadius:32,width:18,height:18}}>
                        <small style={{fontSize:11,position:"absolute",top:"%50",left:"50%",translate:"-50% -5%",fontWeight:800,color:"black"}}>{list.length}</small>
                    </div>}
                    
                </div>
            </PopOverTrigger>
            <PopOverContent position="bottom">

                <div style={{borderBottom:"1px solid lightgray",display:"flex",padding:16,justifyContent:"space-between",gap:24,alignItems:"center"}}>
                    <p style={{userSelect:"none",color:"black",fontWeight:400,whiteSpace:"nowrap"}}>Mi carrito ({list.length})</p>
                    <MoreButton color="black" strokeWidth="1.1"><small style={{whiteSpace:"nowrap",fontWeight:400}}>Ver todas</small></MoreButton>
                </div>
                <ul style={{overflowY:"scroll", height:"350px",display:"flex",flexDirection:"column",justifyContent:"space-between",gap:16}}>
                
                    
                    {list.length <=0 ? <div style={{padding:0}}><p style={{whiteSpace:"nowrap",fontWeight:500,color:"var(--blue)"}}>Nothing yet..</p></div>: 

                        list.map(e=> <li key={e.id}style={{padding:16,borderBottom:"1px solid lightgray",display:"flex",gap:16}}>
                            
                                <img width="64" height="64" style={{objectFit:"cover",borderRadius:4}}src={`https://${e.imageUrl}`}/>
                                <div style={{display:"flex",flexDirection:"column"}}>
                                    {/*<small style={{color:"gray"}}>{e.brandName}</small>*/}
                                <div style={{display:"flex",alignItems:"start"}}>
                                    <p style={{fontSize:16,fontWeight:500,width:400,whiteSpace:"wrap"}}>{e.name}</p>
                                    <div style={{aligSelf:"baseline",boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",gap:8,padding:"8px 16px",borderRadius:32,display:"flex"}}>
                                        <svg onClick={()=>setList({type:"remove",element:e})} style={{cursor:"pointer"}} fill="none" width="18" height="18" stroke="rgb(6, 10, 15)" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path>
                                        </svg>
                                        <svg fill="none" width="18" height="18" stroke="rgb(6, 10, 15)" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path>
                                        </svg>
                                        <svg fill="none" width="18" height="18" stroke="rgb(6, 10, 15)" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path>
                                        </svg>
                                    </div>
                                </div>
                                    
                                    {/*<small style={{color:"gray",fontWeight:400,whiteSpace:"nowrap"}}>Colour: {e.colour}</small>*/}
                                    <div style={{display:"flex",marginTop:16}}>
                                    
                              <p style={{marginLeft:"auto",fontSize:18,fontWeight:500}}>$ {e.price.current.value}.00</p>
                                    </div>
                                  
                                    
                                    {/*<p>{e.productType}</p>*/}
                                </div>

                            </li>)}
                        <div style={{padding:"0 16px 16px 16px"}}>
                    <Button customStyles={{cursor:"pointer",border:"none",width:"100%",backgroundColor:"rgb(6, 10, 15)",borderRadius:6,padding:"16px 16px",marginTop:16}}>
                        <Link href="/checkout/randomid">
                            <small style={{color:"white",fontWeight:600}}>Go to payment</small> 
                        </Link>
                    </Button>
                    </div>
                </ul>
                
            </PopOverContent>
        </PopOver>
    );
}

export default ShoppingCart;
