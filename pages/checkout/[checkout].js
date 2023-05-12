import React from 'react';
import {FilterShoppingCart} from "../../atoms/ShoppingCount"
import { useRecoilState,RecoilRoot } from 'recoil';
import NavbarLayout from "../../components/NavbarLayout/NavbarLayout"
import FooterLayout from "../../components/FooterLayout/FooterLayout"
import Button from "../../components/Buttons/Button"
import CloseButton from "../../components/Buttons/CloseButton"
export function OrderSummary({ style, values=[{name:"Shipping",value:24}] }){
    let prices = values.map(e => Number(e.value))
    const total = prices.reduce((a,b) => a+b,0 )

    return(
        <div style={style?style:{backgroundColor:"var(--light)",display:"flex",flexDirection:"column"}}>
            <p style={{fontSize:19.80,fontWeight:600}}>Order summary</p>
            {values.map((v,i) => <div style={{display:"flex",justifyContent:"space-between"}}>
                    <p style={{color:"gray"}}>{v.name}</p>
                    <p style={{fontWeight:600}}>$ {v.value}</p>
                    
                </div>)}
                <hr style={{margin:"16px 0",border:"none",height:1,backgroundColor:"lightgray"}}/> 
                <div style={{display:"flex",alignItems:"end",justifyContent:"space-between"}}>
                    
                        <p style={{color:"gray",fontSize:16.80}}>Total</p>
                        <p style={{fontWeight:600,fontSize:16.80}}>$ {total.toFixed(2)}</p>
                </div>
                
                
                    <Button customStyles={{cursor:"pointer",border:"none",width:"100%",backgroundColor:"rgb(6, 10, 15)",borderRadius:6,padding:"16px 16px",marginTop:"16px"}}>
                            <small style={{color:"white",fontWeight:600}}>Checkout</small> 
                    </Button>
        </div>)
}
export function ShoppingCartElementColumn({
    src,
    title,
    subtitle,
    style,
    price,
    inStock,
    children}){
    return(
        <article style={style?style:{display:"flex",gap:24,minWidth:600}}>
            <img width="150" height="150" style={{borderRadius:6,objectFit:"cover"}}src={src}/>
            <div style={{display:"flex",flexDirection:"column"}}>
                <p style={{fontFamily:"Plus Jakarta Sans",fontWeight:600}}>{title}</p>
                <p style={{color:"gray"}}>{subtitle}</p>
                <small style={{fontSize:19.80,fontWeight:500,marginTop:"auto"}}>{price}</small>
                <p>{inStock}</p>
            </div>
            {children}
        </article>
        )
}
export default function Checkout() {
    const [list,setList] = useRecoilState(FilterShoppingCart) 
    let total = list.map(e => e.price.current.value).reduce((a,b) => a+b,0 ).toFixed(2)
    
    return (
        <main style={{padding:48}}>
            <h4 style={{fontWeight:700,color:"rgb(6, 10, 15)"}}>Shopping Cart</h4>
            <hr style={{margin:"32px 0",border:"none",height:1,backgroundColor:"lightgray"}}/> 
            <div style={{display:"flex",justifyContent:"space-between",gap:48}}>
            <div style={{display:"flex",flexDirection:"column",flexGrow:1}}>
                {list.map(e=><div style={{flexGrow:1}}> <ShoppingCartElementColumn
                    title={e.name}
                    subtitle={e.colour}
                    style={{display:"flex",gap:24}}
                    price={e.price.current.text}
                    src={"https://"+e.imageUrl}>
                        <CloseButton action={()=>setList({type:"remove",element:e})}
                        stroke="gray" customStyle={{margin:"0 0 auto auto"}}/>    
                    </ShoppingCartElementColumn>
                    
                    <hr style={{margin:"24px 0",border:"none",height:1,backgroundColor:"lightgray"}}/> 
                    </div>

                     )}
            
            
            </div>
                <OrderSummary 
                style={{minWidth:380,display:"flex",flexDirection:"column",gap:16,padding:"24px 16px",margin:"0 0 auto 0",borderRadius:6,boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"}} 
                values={ [{name:"Subtotal",value:total}, {name:"Shipping",value:"4.00"},{name:"Taxes",value:"3.20"}] }/>
            </div>
            
        </main>
    );
}

Checkout.Layout = function Layout(page) {
  return (
    <>
      <RecoilRoot>
        <NavbarLayout>                   
            {page}  
        </NavbarLayout>
        <FooterLayout>
        </FooterLayout>
      </RecoilRoot>        
    </>
    )
  
}
