import {motion} from "framer-motion"
import styles from '../../styles/Product.module.css'
import {RecoilRoot} from "recoil"
import 'react-loading-skeleton/dist/skeleton.css'
import PopOverLi from '../../components/PopOver/PopOverLi'
import Navbar from "../../components/nav/Navbar"
import {NavbarElement} from "../../components/nav/Navbar"
import Link from "next/link"
import NavbarLayout from "../../components/NavbarLayout/NavbarLayout"
import PopOver from "../..//components/PopOver/PopOver"
import Button from '../../components/Buttons/Button'
import Counter from '../../components/Buttons/Counter'
import MoreButton from '../../components/Buttons/MoreButton'
import Searchbar from '../../components/Searchbar/Searchbar'
import PopOverContent from '../../components/PopOver/PopOverContent'
import PopOverTrigger from '../../components/PopOver/PopOverTrigger'
import ShoppingCart from "../../components/ShoppingCart/ShoppingCart"
import axios  from 'axios'
import ProductCard from '../../components/Cards/ProductCard'
import Image from "next/image"
import AddCart from '../../components/Buttons/AddCart'
import CategoryList from '../../components/CategoryList/CategoryList'
import CategoryListElement from '../../components/CategoryList/CategoryListElement'
import {useRecoilState} from "recoil"
import ShoppingCount from '../../atoms/ShoppingCount'
import imageexample from "../../public/pexels-aleksandr-neplokhov-2528362.jpg"
import UserDropdownElement from "../../components/PopOver/UserDropdownElement"
import {useState,useEffect} from "react"
import Skeleton from 'react-loading-skeleton'
import ProductImage from '../../components/Cards/ProductImage'
import {useRouter} from "next/router"
import bg from "../../public/Grad_02.png"
import StarReview from "../../components/Stars/StarReview"
import ImageGallery from "../../components/ImageGallery/ImageGallery"
import SelectCard from "../../components/Cards/SelectCard"
import FooterLayout from "../../components/FooterLayout/FooterLayout"
import ColorSelect from "../../components/Cards/ColorSelect"

const Product = ({response}) => {
  const regexp = /<(\/*?)(?!(em|p|br\s*\/|strong))\w+?.+?>/gim
  const description = response.info.aboutMe.split(regexp)

  console.log(response)
    return (
        <main 
          className={styles.main}
          style={{
            padding:80,
            display:"flex",
            gap:50,
            boxShadow:"rgba(0, 0, 0, 0.05) 0px 0px 0px 1px"}}>
              <div>
              <ImageGallery/>
              </div>

              <div >
              <h4 style={{marginBottom:16,lineHeight:1,fontFamily:'Plus Jakarta Sans',color:"#111f30",fontWeight:700}}>{response.name}</h4>
              <div style={{display:"flex",alignItems:"center",gap:24}}>
              <StarReview value={4} color="var(--dominant-blue)" width={20} height={20}/>

              
              <div style={{display:"flex",alignItems:"center",gap:8}}>
                <svg style={{fill:"rgb(34 197 94 / 80%)"}} width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M19.916 4.62604C20.2607 4.85581 20.3538 5.32146 20.124 5.6661L11.124 19.1661C10.9994 19.3531 10.7975 19.4743 10.5739 19.4964C10.3503 19.5186 10.1286 19.4393 9.96967 19.2804L3.96967 13.2804C3.67678 12.9875 3.67678 12.5126 3.96967 12.2197C4.26256 11.9269 4.73744 11.9269 5.03033 12.2197L10.3834 17.5729L18.876 4.83405C19.1057 4.48941 19.5714 4.39628 19.916 4.62604Z" />
                </svg>
                <small style={{color:"gray"}}>In stock and ready to ship</small>
              </div>  
              </div>
              

              <div style={{marginTop:16,display:"flex",flexDirection:"column",gap:8}}>
              {/*<small style={{color:"black",fontWeight:500,letterSpacing:.5}}>Description</small>*/}
              <p style={{color:"#8a9097",fontWeight:400}}>{description}</p>

              
              </div>
              <p style={{fontFamily:'Plus Jakarta Sans'}}>{response.isInStock}</p>
              {/*<p>Colours</p>*/}
<hr style={{width:"100%",margin:"24px 0",backgroundColor:"lightgray",height:1,border:"none"}}/>

              
              <div style={{display:"inline-flex",flexDirection:"column",gap:8}}>
                <small style={{color:"rgb(6, 10, 15)",fontWeight:500,letterSpacing:.5}}>Specifications</small>
                <div style={{display:"inline-flex",flexDirection:"column",gap:4}}>
                  <small style={{color:"gray"}}>Gender: {response.gender}</small>
                  <small style={{color:"gray"}}>{response.info.sizeAndFit}</small>
                  <small style={{color:"gray"}}>{response.info.careInfo}</small>
                </div>
                
              </div>
              <hr style={{width:"100%",margin:"24px 0",backgroundColor:"lightgray",height:1,border:"none"}}/>
              <div style={{display:"flex",justifyContent:"space-between"}}>
              <div style={{display:"flex",flexDirection:"column",gap:8}}>
                <small style={{color:"rgb(6, 10, 15)",fontWeight:500,letterSpacing:.5}}>Size</small>
                <div style={{display:"flex",gap:8}}>
                  <SelectCard title={"XL"} />
                  <SelectCard title="S"/>
                  <SelectCard title="M" description="Fits well for small bodies."/>
                </div>
                </div>
                <div style={{display:"flex",flexDirection:"column",gap:8}}>
                <small style={{color:"rgb(6, 10, 15)",fontWeight:500,letterSpacing:.5}}>Colours</small>
                <div style={{display:"flex",gap:8}}>
                  <ColorSelect color="green" padding={12}/>
                  <ColorSelect color="black" padding={12}/>
                </div>
                </div>
              </div>
              <hr style={{width:"100%",margin:"24px 0",backgroundColor:"lightgray",height:1,border:"none"}}/>
              <div style={{display:"inline-flex",flexDirection:"column",gap:8}}>
                <small style={{color:"rgb(6, 10, 15)",fontWeight:500,letterSpacing:.5}}>Quantity</small>
                <Counter/>
              </div>
              <div style={{display:"flex",alignItems:"end",justifyContent:"end",alignItems:"end",gap:8}}>
                <p style={{display:"inline-block",fontFamily:'Plus Jakarta Sans',color:"gray",fontWeight:400,textDecoration:"line-through"}}>{response.price.previous.text}</p>
                <h4 style={{display:"inline-block",fontFamily:'Plus Jakarta Sans',color:"black",fontWeight:600}}>{response.price.current.text}</h4>
              </div>

              <Button customStyles={{cursor:"pointer",border:"none",width:"100%",backgroundColor:"var(--dominant-blue)",borderRadius:6,padding:"16px 16px",marginTop:16}}>
                <small style={{color:"white",fontWeight:600}}>Buy</small>
              </Button>
            </div>
            
        </main>
    );
}

export default Product;

export async function getServerSideProps({id}){


    let data = await axios.post("http://localhost:3000/api/productdetails",{id})  
    const response = await JSON.parse(JSON.stringify(data.data))
    return{
      props:{
        response
      }
  }
}
Product.Layout = function Layout(page) {
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

