import styles from '../styles/Home.module.css'
import {motion} from "framer-motion"
import getAllProducts from "../services/getAllProducts"
import {RecoilRoot} from "recoil"
import 'react-loading-skeleton/dist/skeleton.css'
import PopOverLi from '../components/PopOver/PopOverLi'
import Navbar from "../components/nav/Navbar"
import {NavbarElement} from "../components/nav/Navbar"
import Link from "next/link"
import NavbarLayout from "../components/NavbarLayout/NavbarLayout"
import FooterLayout from "../components/FooterLayout/FooterLayout"
import PopOver from "../components/PopOver/PopOver"
import Button from '../components/Buttons/Button'
import MoreButton from '../components/Buttons/MoreButton'
import Searchbar from '../components/Searchbar/Searchbar'
import PopOverContent from '../components/PopOver/PopOverContent'
import PopOverTrigger from '../components/PopOver/PopOverTrigger'
import ShoppingCart from "../components/ShoppingCart/ShoppingCart"
import axios  from 'axios'
import ProductCard from '../components/Cards/ProductCard'
import Image from "next/image"
import AddCart from '../components/Buttons/AddCart'
import CategoryList from '../components/CategoryList/CategoryList'
import CategoryListElement from '../components/CategoryList/CategoryListElement'
import {useRecoilState} from "recoil"
import ShoppingCount from '../atoms/ShoppingCount'
import imageexample from "../public/pexels-aleksandr-neplokhov-2528362.jpg"
import UserDropdownElement from "../components/PopOver/UserDropdownElement"
import {useState,useEffect} from "react"
import Skeleton from 'react-loading-skeleton'
import ProductImage from '../components/Cards/ProductImage'
import {useRouter} from "next/router"
import bg from "../public/Grad_02.png"
import PromoSection from "../components/PromoSection/PromoSection"
import Footer from "../components/Footer/Footer"
import  InputText from "../components/InputText/InputText"
import useSetQueryRouter from "../hooks/useSetQueryRouter"
export default function Home({response=false}) {

  const [loading,setLoading] = useState(false )

  const {
    setQueryCategory,
    setQuerySearch,
    router,
    setNewUrl} = useSetQueryRouter()

  useEffect(()=>{
    setLoading(false)}
    ,[router.query])

  return (
    <>
      <main 

        style={{
          width:"100%",
          height:"100vh",
          overflow:"hidden",
          display:"flex",
          padding:"0 0 0 0",
          background:"linear-gradient(1deg, rgb(10 27 47), rgb(6 10 15))",
          alignItems:"center",
          justifyContent:"space-between"}}>

          <div className={styles.heroSection} >
            <h2 className={styles.heroMainText}style={{color:"var(--light)",lineHeight:1.09,fontWeight:800,letterSpacing:-0.4,fontFamily:"Plus Jakarta Sans"}}>Consigue hasta un 50% de descuento</h2>
            <h4 style={{color:"var(--light)",marginTop:8,fontWeight:300}}>Ropa para damas, caballeros y niños</h4>
            <MoreButton 
            customStyles={{marginTop:24,border:"1px solid white",padding:"8px 16px",borderRadius:40}} 
            color="var(--main-white)">
              <small style={{fontWeight:500,color:"var(--main-white)"}} >
                Ver las ofertas
              </small>
            </MoreButton>
          </div>
          <div className={styles.heroImg} >
            <img width={"100%"} height={"100%"} style={{objectFit:"cover"}}src="https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/> 
          </div>

        
        
        {/*<div style={{width:"100%",height:250}}> div</div>*/}
        
      </main>
    <div className={styles.section}>
    <section style={{display:"flex",flexDirection:"column",gap:16}}>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <p style={{fontSize:19.80,fontWeight:700,color:"rgb(6, 10, 15)",fontFamily:"Plus Jakarta Sans"}}>Categorías</p>
              <MoreButton color="rgb(6, 10, 15)">
        <small  style={{fontWeight:500}}>
          Ver todos  
        </small>
      </MoreButton>
      </div>
              <div style={{display:"grid",
                gridTemplateColumns:"repeat(auto-fill,minmax(250px,1fr)",
        gap:24}}>
                
              
                <ProductCard>
                <ProductImage 
                noHover
                src="https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt={"girl"}
                style={{
                  filter:"brightness(.8)",
                  borderRadius:6,
                  objectFit:"cover",width:"100%",height:"240px"}}>             
                  <MoreButton 
                    color="white" 
                    width="20" 
                    height="20"
                    strokeWidth={2.4}
                    customStyles={{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",backgroundColor:"black",padding:"16px 32px",borderRadius:50,position:"absolute",top:"80%",left:"50%",translate:"-50% -50%"}}>
                    <p style={{whiteSpace:"nowrap",fontSize:16.00,zIndex:100,color:"white",fontWeight:700,fontFamily:"Plus Jakarta Sans"}}>Para mujeres</p>
                   </MoreButton>       
                </ProductImage>
                </ProductCard>
                <ProductCard>
                <ProductImage 
                noHover
                src="https://media.istockphoto.com/id/1364917563/es/foto/hombre-de-negocios-sonriendo-con-los-brazos-cruzados-sobre-fondo-blanco.webp?s=1024x1024&w=is&k=20&c=SEMPK49N4rBMOKGybn8XDfeK475-A4aURSAU--VZRc4="
                alt={"girl"}
                style={{
                  filter:"brightness(.8)",
                  borderRadius:6,
                  objectFit:"cover",width:"100%",height:"240px"}}>   
                  <MoreButton 
                    color="white" 
                    width="20" 
                    height="20"
                    strokeWidth={2.4}
                    customStyles={{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",backgroundColor:"black",padding:"16px 32px",borderRadius:50,position:"absolute",top:"80%",left:"50%",translate:"-50% -50%"}}>
                    <p style={{whiteSpace:"nowrap",fontSize:16.00,zIndex:100,color:"white",fontWeight:700,fontFamily:"Plus Jakarta Sans"}}>Para hombres</p>
                   </MoreButton>                 
                </ProductImage>
                </ProductCard>
                <ProductCard>
                <ProductImage 
                noHover
                src="https://images.pexels.com/photos/2896840/pexels-photo-2896840.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt={"girl"}
                style={{
                  filter:"brightness(.8)",
                  borderRadius:6,
                  objectFit:"cover",width:"100%",height:"240px"}}>   
                  <MoreButton 
                    color="white" 
                    width="20" 
                    action={()=>setNewUrl("/category/popular")}
                    height="20"
                    strokeWidth={2.4}
                    customStyles={{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",backgroundColor:"black",padding:"16px 32px",borderRadius:50,position:"absolute",top:"80%",left:"50%",translate:"-50% -50%"}}>
                    <p style={{whiteSpace:"nowrap",fontSize:16.00,zIndex:100,color:"white",fontWeight:700,fontFamily:"Plus Jakarta Sans"}}>Popular</p>
                   </MoreButton>                 
                </ProductImage>
                </ProductCard>
                <ProductCard>
                <ProductImage 
                noHover
                src="https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt={"girl"}
                style={{
                  filter:"brightness(.8)",
                  borderRadius:6,
                  objectFit:"cover",width:"100%",height:"240px"}}>                    
                  <MoreButton 
                    color="white" 
                    width="20" 
                    height="20"
                    strokeWidth={2.4}
                    customStyles={{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",backgroundColor:"black",padding:"16px 32px",borderRadius:50,position:"absolute",top:"80%",left:"50%",translate:"-50% -50%"}}>
                    <p style={{whiteSpace:"nowrap",fontSize:16.00,zIndex:100,color:"white",fontWeight:700,fontFamily:"Plus Jakarta Sans"}}>Lo más vendido</p>
                   </MoreButton>
                </ProductImage>
               
                </ProductCard>
</div>
            </section>
            <PromoSection src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"customStyle={{marginTop:48}}>
           
            </PromoSection>
      <section style={{marginTop:48}}>

      <div style={{marginBottom:16,marginTop:8,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
      <p style={{fontSize:19.80,fontWeight:700,color:"rgb(6, 10, 15)",fontFamily:"Plus Jakarta Sans"}}>Popular</p>

      <div style={{marginLeft:"auto"}}>
      <MoreButton>
        <small style={{fontWeight:500}}>
          Ver todos  
        </small>
      </MoreButton>
      </div>
   
      </div>

      {loading || !response ? <Skeleton count={6} inline={true} style={{margin:"0 16px 16px 0"}} gap="8" height="360px" width="220px"/> : <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fill,minmax(250px,auto)",
        gap:24,}}>{response.products.slice(0,4).map(e=>
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
            <hr style={{width:"100%",margin:"48px 0",backgroundColor:"lightgray",height:1,border:"none"}}/>
            <section style={{display:"flex",gap:8,height:"400px",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
              <h3 style={{textAlign:"center",fontWeight:900,color:"rgb(6, 10, 15)",fontFamily:"Plus Jakarta Sans"}}><mark style={{backgroundColor:"transparent",textDecoration:"underline",fontFamily:"inherit",color:"var(--dominant-blue)"}}>Suscríbete</mark> a nuestro diario para recibir las últimas actualizacaciones</h3>
              <p style={{textAlign:"center",fontSize:19.80,color:"var(--blue)",fontFamily:"Plus Jakarta Sans"}}>Obten un 20% de descuento con tu primera orden suscribiéndote a nuestro diario</p>
              <div style={{display:"flex",justifyContent:"center",width:"100%",gap:8,marginTop:24,flexWrap:"wrap"}}>
                <InputText style={{padding:"16px auto"}}/>
                <Button customStyles={{backgroundColor:"rgb(6, 10, 15)",borderRadius:6,border:"none",padding:"16px 32px"}}>
                  <p style={{color:"var(--light)",fontWeight:400}}>Suscribirse</p>
                </Button>
              </div>
              <small style={{color:"gray",fontFamily:"Plus Jakarta Sans"}}>Podrás desuscribirte en cualquier momento</small>
              <small style={{color:"gray",fontFamily:"Plus Jakarta Sans"}}>Leer la política de privacidad <Link href="/">aquí.</Link></small>
            </section>
            
    </div>
    </>

  )

}
export async function getServerSideProps({query}){
  const PORT = process.env.PORT || 3000
  if(Object.keys(query).length > 0) {
    let data = await axios.post(`https://marketplace-web-app-theta.vercel.app/api/listbyquery`,{query})  
    const response = await JSON.parse(JSON.stringify(data.data))
    return{
      props:{
        response
      }
    }
  }
  
  let data = await axios(`https://marketplace-web-app-theta.vercel.app/api/allProducts`)
  const response = await JSON.parse(JSON.stringify(data.data))
  
  return{
    props:{
      response
    }
  }
}
Home.Layout = function Layout(page) {
  return (
    <>
      <RecoilRoot>
        <NavbarLayout>                   
            {page}  
        {/*<FooterLayout>
        </FooterLayout>*/}
        </NavbarLayout>

      </RecoilRoot>        
    </>
    )
  
}
