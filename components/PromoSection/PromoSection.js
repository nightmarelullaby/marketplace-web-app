import MoreButton from "../Buttons/MoreButton"
import styles from "./PromoSection.module.css"
export default function PromoSection({customStyle,children,src}){

	return(
		<article style={customStyle?customStyle:{}}>
		<div 
			style={{position:"relative",display:"flex",alignItems:"center",maxHeight:350,borderRadius:8,overflow:"hidden",backgroundColor:"rgb(6, 10, 15)"}}>
			 <img className={styles.img}style={{backgroundPosition:"left",objectFit:"cover"}} src={src}/>
              <div className={styles.section} style={{padding:24,display:"flex",flexDirection:"column",gap:8}}>
                <p style={{fontWeight:300,letterSpacing:1,color:"var(--light)",fontFamily:"Plus Jakarta Sans"}}>OFERTA LIMITADA</p>
                <h3 style={{color:"white",lineHeight:1,fontFamily:"Plus Jakarta Sans"}}>40% de descuento en ropa deportiva</h3>
                <MoreButton 
                  width="24" 
                  height="24" 
                  color="rgb(6, 10, 15)" 
                  customStyles={{margin:"16px auto 0 0",backgroundColor:"var(--light)",borderRadius:32,padding:"8px 24px",gap:8}}>
                  <p style={{color:"rgb(6, 10, 15)",fontWeight:500}}>Ver las ofertas</p>
               	</MoreButton>
      		</div>
				{children}

		</div>
		</article>)
}