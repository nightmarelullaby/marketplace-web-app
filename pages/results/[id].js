
import {motion} from "framer-motion"
import {RecoilRoot} from "recoil"
import PopOverLi from '../../components/PopOver/PopOverLi'
import Navbar from "../../components/nav/Navbar"
import {NavbarElement} from "../../components/nav/Navbar"
import Link from "next/link"
import NavbarLayout from "../../components/NavbarLayout/NavbarLayout"
import PopOver from "../../components/PopOver/PopOver"
import MoreButton from '../../components/Buttons/MoreButton'
import Button from '../../components/Buttons/Button'
import Searchbar from '../../components/Searchbar/Searchbar'
import PopOverContent from '../../components/PopOver/PopOverContent'
import PopOverTrigger from '../../components/PopOver/PopOverTrigger'
import ShoppingCart from "../../components/ShoppingCart/ShoppingCart"
import axios  from 'axios'
import ProductCard from '../../components/Cards/ProductCard'
import Image from "next/image"
import AddCart from '../../components/Buttons/AddCart'
import {useRecoilState} from "recoil"
import ShoppingCount from '../../atoms/ShoppingCount'
import 'react-loading-skeleton/dist/skeleton.css'
import ProductImage from '../../components/Cards/ProductImage'
import Skeleton from 'react-loading-skeleton'
import {useState,useEffect} from "react"
import FooterLayout from "../../components/FooterLayout/FooterLayout"
import FilterLayout from "../../components/FilterLayout/FilterLayout.js"
import useSetQueryRouter from "../../hooks/useSetQueryRouter"
export default function Id({response}){
    const {
    setQueryCategory,
    setQuerySearch,
    router,
    setNewUrl} = useSetQueryRouter()
  const [loading,setLoading] = useState(false )
  useEffect(()=>{
    setLoading(false)}
    ,[router.query])

  const [cart,setCart] = useRecoilState(ShoppingCount)

  const addToCart = (e) => {
    return setCart(cart.concat(e))
  }
  return (
     <div style={{padding:"",width:"100%"}}>
      <main>
      <p>Mostrando 1 de 60 items para <strong>{router.query.q}</strong></p>
      </main>

      <section style={{marginTop:16}}>

   {loading || !response ? <Skeleton count={6} inline={true} style={{margin:"0 16px 16px 0"}} gap="8" height="360px" width="220px"/> : <div style={{
        display:"grid",

        gridTemplateColumns:"repeat(auto-fill,minmax(240px,auto)",
        gap:24,}}>{response.products.map(e=>
      <div key={e.id}>

        <ProductCard 
          customStyles={{
            width:"100%",
            display:"flex",
            flexDirection:"column",
            height:"auto",
            borderRadius:4,
            position:"relative"}}>
          <ProductImage 
            tagName={e.brandName}
            src={`http://${e.imageUrl}`}
            alt={e.name}
            style={{
              borderRadius:6,
              objectFit:"cover",width:"inherit",height:"240px"}}/>  
<Link href={"/product/"+e.id}> 


          
              <div style={{display:"flex",marginTop:8,marginBottom:8,flexDirection:"column"}}>
                <p style={{color:"#0f1214",fontFamily:'Plus Jakarta Sans',fontWeight:600}}> {e.name.length >= 20?`${e.name}`:e.name}</p>
                
               {/*<small style={{color:"#686868",fontFamily:'Plus Jakarta Sans',marginTop:8}}>{e.brandName}</small>*/} 
                <div style={{display:"flex",marginTop:8,justifyContent:"space-between"}}>
                <small style={{color:"#686868",fontFamily:'Plus Jakarta Sans'}}>Color · {e.colour}</small>
                  <p style={{
                      fontSize:19.00,
                      color:"#0f1214",
                      alignSelf:"start",
                      fontWeight:500}}>$ {e.price.current.value}.00
                    </p>
                  </div>
              </div>

            </Link>
        <AddCart customStyles={{padding:"14px"}}data={e}/>
        </ProductCard>
        
      </div>
        )}

      </div>
 }
      </section>
    </div>

  )
}
export async function getServerSideProps(ctx){
  const query = ctx.query

  let data = await axios.post("https://marketplace-web-app-theta.vercel.app/api/listbyquery",{query})
  const response = await JSON.parse(JSON.stringify(data.data))
  
  return{
    props:{
      response
    }
  }
}
Id.Layout = function Layout(page) {
  return (
    <>
     <RecoilRoot>
        <NavbarLayout>
          <FilterLayout>
            {page}  
          </FilterLayout>
        </NavbarLayout>
        <FooterLayout/>
      </RecoilRoot>  
    </>
    )
  
}

