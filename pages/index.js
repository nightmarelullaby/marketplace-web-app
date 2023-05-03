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
export default function Home({response=false}) {
  const router = useRouter()
  const [loading,setLoading] = useState(false )

  useEffect(()=>{
    setLoading(false)
    console.log(loading)}
    ,[router.query])




  const switchCategory = async (query="all") =>{
      setLoading(true)
      const queries = router.query
      queries.q = query
      return router.push({pathname:"/",query:queries},null,{scroll:false})
  }

  const sortBy = async(query) => {
      setLoading(true)
      const queries = router.query
      queries.sort = query
      return router.push({pathname:"/",query:queries},null,{scroll:false})
  }

  const addToCart = (e) => {
    return setCart(cart.concat(e))
  }

  return (
    <>
      <main 
        style={{
          width:"100%",
          height:"100vh",
          overflow:"hidden",
          display:"flex",
          padding:"0 0 0 32px",
          background:"linear-gradient(1deg, rgb(10 27 47), rgb(6 10 15))",
          alignItems:"center",
          justifyContent:"space-between"}}>

          <div>
            <h2 style={{color:"var(--light)",width:600,lineHeight:1.09,fontWeight:800,letterSpacing:-0.4,fontFamily:"Plus Jakarta Sans"}}>Consigue hasta un 50% de descuento</h2>
            <h4 style={{color:"var(--light)",marginTop:8,fontWeight:300}}>Ropa para damas, caballeros y niños</h4>
            <MoreButton 
            customStyles={{marginTop:24,border:"1px solid white",padding:"8px 16px",borderRadius:40}} 
            color="var(--main-white)">
              <small style={{fontWeight:500,color:"var(--main-white)"}} >
                Ver las ofertas
              </small>
            </MoreButton>
          </div>
          <div style={{borderRadius:4,overflow:"hidden",height:"inherit"}}>
            <img src="https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/> 
          </div>

        
        
        {/*<div style={{width:"100%",height:250}}> div</div>*/}
        
      </main>
    <div style={{padding:"0 72px",marginTop:24}}>
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
            <PromoSection customStyle={{marginTop:48}}>
            <img style={{backgroundPosition:"left",clipPath:" polygon(0 0, 0% 100%, 100% 50%)",objectFit:"cover"}} src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
              <div style={{padding:24,display:"flex",flexDirection:"column",gap:8}}>
                <p style={{fontWeight:200,letterSpacing:1,color:"var(--light)",fontFamily:"Plus Jakarta Sans"}}>OFERTA LIMITADA</p>
                <h3 style={{color:"white",lineHeight:1,fontFamily:"Plus Jakarta Sans"}}>40% de descuento en ropa deportiva</h3>
                <MoreButton width="24" height="24" color="rgb(6, 10, 15)" customStyles={{marginTop:16,backgroundColor:"var(--light)",borderRadius:32,padding:"8px 24px",gap:8}}>
                  <p style={{color:"rgb(6, 10, 15)",fontWeight:500}}>Ver las ofertas</p>
                </MoreButton>
      </div>
            </PromoSection>
      <section style={{marginTop:48}}>
      {/*<div style={{display:"flex",flexDirection:"column",gap:16,marginBottom:32}}>
          {/*<Searchbar placeholder={"Camisas de vestir, zapatos de cuero..."}/>*/}

         

      {/*</div>*/}
             {/* <div style={{display:"flex",gap:24}}>
              <PopOver>
                <PopOverTrigger>

                        <Button customStyles={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",border:"none",backgroundColor:"transparent",padding:"8px 16px",borderRadius:4,cursor:"pointer",display:"inline-flex",alignItems:"center",gap:4}}>
                          <small style={{color:"var(--black)",fontWeight:500}}>
                            Ordenar
                          </small>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M19.5 8.25L12 15.75L4.5 8.25" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        </Button>
                        
                        

                </PopOverTrigger>
                <PopOverContent position="bottom">
                  <div style={{minWidth:150}}>
                  
                    <UserDropdownElement action={()=>sortBy("priceasc")}>
                        
                        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path>
                        </svg>
                      <small style={{whiteSpace:"nowrap",fontWeight:500}}>Precio más bajo</small>
                    </UserDropdownElement>
                    
                    <UserDropdownElement action={()=>sortBy("freshness")}>
    
                    <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"></path>
                      </svg>
                      <small style={{whiteSpace:"nowrap",fontWeight:500}}>En tendencia</small>
                    </UserDropdownElement>
                    <UserDropdownElement action={()=>sortBy("pricedesc")}>
                    <svg width="18" height="18"fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"></path>
                    </svg>
                      <small style={{whiteSpace:"nowrap",fontWeight:500}}>Precio más alto</small>
                    </UserDropdownElement>
                  </div>
                </PopOverContent>
              </PopOver>
      </div>*/}
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
              <h3 style={{width:800,textAlign:"center",fontWeight:900,color:"rgb(6, 10, 15)",fontFamily:"Plus Jakarta Sans"}}><mark style={{backgroundColor:"transparent",textDecoration:"underline",fontFamily:"inherit",color:"var(--dominant-blue)"}}>Suscríbete</mark> a nuestro diario para recibir las últimas actualizacaciones</h3>
              <p style={{textAlign:"center",fontSize:19.80,color:"var(--blue)",fontFamily:"Plus Jakarta Sans"}}>Obten un 20% de descuento con tu primera orden suscribiéndote a nuestro diario</p>
              <div style={{display:"flex",gap:8,marginTop:24}}>
                <InputText/>
                <Button customStyles={{backgroundColor:"rgb(6, 10, 15)",borderRadius:6,border:"none",padding:"16px 32px"}}>
                  <p style={{color:"var(--light)",fontWeight:400}}>Suscribirse</p>
                </Button>
              </div>
              <small style={{color:"gray",fontFamily:"Plus Jakarta Sans"}}>Podrás desuscrirte en cualquier momento</small>
              <small style={{color:"gray",fontFamily:"Plus Jakarta Sans"}}>Leer la política de privacidad <Link href="/">aquí.</Link></small>
            </section>
            
    </div>
    </>

  )

}
export async function getServerSideProps({query}){
  const PORT = process.env.PORT || 3000
  if(Object.keys(query).length > 0) {
    let data = await axios.post(`https://marketplace-web-d9tfdf3up-nightmarelullaby.vercel.app/api/listbyquery`,{query})  
    const response = await JSON.parse(JSON.stringify(data.data))
    return{
      props:{
        response
      }
    }
  }
  
  let data = await axios(`https://marketplace-web-d9tfdf3up-nightmarelullaby.vercel.app/api/allProducts`)
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
        </NavbarLayout>
        <FooterLayout>
        </FooterLayout>
      </RecoilRoot>        
    </>
    )
  
}
