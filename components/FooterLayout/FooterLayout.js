
import {memo} from "react"
import { useRecoilState } from "recoil"
import Footer from "../Footer/Footer"




function FooterLayout({children}){
	return(
			<div>				
				{children}
				<Footer>
          <div style={{justifyContent:"end",display:"flex",gap:24,padding:72,backgroundColor:"var(--light)",marginTop:72}}>
            <div style={{display:"flex",flexDirection:"column",gap:8}}>
              <p style={{color:"var(rgb(6, 10, 15))",fontWeight:700}}>SOPORTE</p>
              <small style={{color:"var(--blue)"}}>FAQs</small>  
              <small style={{color:"var(--blue)"}}>Términos de uso</small>  
              <small style={{color:"var(--blue)"}}>Política de cookies</small>  
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:8}}>
              <p style={{color:"var(rgb(6, 10, 15))",fontWeight:700}}>COMPAÑÍA</p>
              <small style={{color:"var(--blue)"}}>About page</small>  
              <small style={{color:"var(--blue)"}}>Contacto</small>  
              <small style={{color:"var(--blue)"}}>Afiliados</small>  
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:8}}>
              <p style={{color:"var(rgb(6, 10, 15))",fontWeight:700}}>TIENDA</p>
              <small style={{color:"var(--blue)"}}>Todas las colecciones</small>  
              <small style={{color:"var(--blue)"}}>Descuentos</small>  
              <small style={{color:"var(--blue)"}}>Afiliados</small>  
            </div>
          
          </div>
        </Footer>
			</div>
	)
}
export default memo(FooterLayout)