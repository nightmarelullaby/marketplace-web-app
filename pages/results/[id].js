
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
import Skeleton from 'react-loading-skeleton'
import {useState,useEffect} from "react"
import FooterLayout from "../../components/FooterLayout/FooterLayout"
import {useRouter} from "next/router"

export default function Id({response}){
    const router = useRouter()
  const [loading,setLoading] = useState(false )
  useEffect(()=>{
    setLoading(false)
    console.log(loading)}
    ,[router.query])

  const [cart,setCart] = useRecoilState(ShoppingCount)

  const addToCart = (e) => {
    return setCart(cart.concat(e))
  }
  return (
     <div style={{padding:"0 32px"}}>
      <main>
      <h3>Resultados para...</h3>

      </main>
     
      <section style={{marginTop:24}}>
      {/*<div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
      <h4 style={{marginBottom:8,color:"var(--black)"}}>Resultados de la búsqueda...</h4>
      <MoreButton>
        <small style={{fontWeight:500}}>
          Ver todos  
        </small>
      </MoreButton>
      </div>*/}
      {loading ? <Skeleton count={6} inline={true} style={{margin:"0 16px 16px 0"}} gap="8" height="360px" width="220px"/>:
      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fill,minmax(auto,220px)",
        gap:16,
        height:"100vh"}}>{response.products.slice(0,5).map(e=>
      <div key={e.id}>
        <ProductCard 
          customStyles={{
            width:"100%",
            display:"flex",
            flexDirection:"column",
            height:360,
            borderRadius:4,
            position:"relative"}}>
          
          <Image 
            width="220"
            height="360"
            alt={e.name}
            style={{borderRadius:6}}
              objectFit='cover'
            src={`http://${e.imageUrl}`} 
            />
            <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
              <div style={{display:"flex",marginTop:8,marginBottom:8,alignItems:"center"}}>
                <p style={{color:"rgb(55 65 81 /81%)",fontWeight:400}}> {e.name.length >= 20?`${e.name.slice(0,28)}...`:e.name}</p>
                <p style={{color:"var(--black)",fontSize:"var(--normal--)",alignSelf:"start",fontWeight:700}}>{e.price.current.text}</p> 
              </div>
            </div>
        <AddCart 
          data={e}/>

        </ProductCard>
        
      </div>
        )}

      </div>}
      </section>
    </div>

  )
}
export async function getServerSideProps(ctx){
  const query = ctx.query

console.log("in servser",query)  
  let data = await axios.post("https://marketplace-web-d9tfdf3up-nightmarelullaby.vercel.app/api/listbyquery",{query})
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
            {page}  
        </NavbarLayout>
        <FooterLayout>
        </FooterLayout>
      </RecoilRoot>  
    </>
    )
  
}

